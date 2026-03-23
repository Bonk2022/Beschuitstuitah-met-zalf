Add-Type -AssemblyName System.Drawing
try {
    Write-Host "Laden van originele afbeelding..."
    $img = [System.Drawing.Image]::FromFile("c:\Users\Bink\Desktop\projekt\grafheuvel\kleur_MBRONS_ABV_def.jpg")

    $newWidth = 4096
    $ratio = $img.Height / $img.Width
    $newHeight = [int]([Math]::Round($newWidth * $ratio))
    
    Write-Host "Origineel: $($img.Width)x$($img.Height)"
    Write-Host "Nieuw formaat: ${newWidth}x${newHeight}. Resizing..."

    $bmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    
    # Optional: Set better quality rendering
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    
    $g.DrawImage($img, 0, 0, $newWidth, $newHeight)
    $g.Dispose()
    $img.Dispose()

    Write-Host "Opslaan als kleur_MBRONS_4K.jpg..."
    
    # Save as high quality JPEG
    $myImageCodecInfo = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $myEncoder = [System.Drawing.Imaging.Encoder]::Quality
    $myEncoderParameters = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $myEncoderParameter = New-Object System.Drawing.Imaging.EncoderParameter($myEncoder, [long]90) # 90% quality
    $myEncoderParameters.Param[0] = $myEncoderParameter
    
    $bmp.Save("c:\Users\Bink\Desktop\projekt\grafheuvel\kleur_MBRONS_4K.jpg", $myImageCodecInfo, $myEncoderParameters)
    $bmp.Dispose()

    Write-Host "Succesvol geschaald en opgeslagen!"
} catch {
    Write-Error "Fout bij uitsnijden: $_"
}
