# Talks Section - Image Upload Instructions

## Required Images

Please upload the following talk images to this folder (`public/talks/`):

1. **unity.jpg** - For the "Unity" talk by Gina Chavez
2. **transformation.jpg** - For "The Art of Transformation" talk by Romero Britto
3. **hacked.jpg** - For the "Hacked?" talk by Ralph Echemendia
4. **save-life.jpg** - For "You can Save Someone's Life Today" by Dr. Julie Radlauer-Doerfler
5. **build-wall.jpg** - For "Build The Wall" by Dr. Landolf Rhode-Barbarigos

## Image Specifications

- **Format**: JPG or PNG
- **Recommended dimensions**: 
  - Large cards (Unity, Transformation): 1600 x 900 pixels (16:9 ratio)
  - Medium cards (Hacked, Save Life, Build Wall): 1600 x 1000 pixels (16:10 ratio)
- **File size**: Optimized for web (ideally under 500KB each)
- **Quality**: High resolution with clear speaker images

## Current Status

Until you upload the actual images, placeholder graphics will be displayed with "Image Coming Soon" text.

## How to Add Images

1. Save your talk images in this folder
2. Name them exactly as specified above (case-sensitive):
   - unity.jpg
   - transformation.jpg
   - hacked.jpg
   - save-life.jpg
   - build-wall.jpg
3. Refresh your browser to see the images

## YouTube Links

To add YouTube links for each talk, edit the `talksData` array in `src/components/Talks.jsx`:

```javascript
{
  id: 1,
  title: "Unity",
  speaker: "GINA CHAVEZ",
  image: "/talks/unity.jpg",
  youtubeLink: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID", // Replace with actual link
  size: "large"
}
```

Replace the `#` placeholder with your actual YouTube URLs.

## Notes

- Images should feature the speaker prominently
- Consider using images from the actual TEDx talk for authenticity
- Ensure you have permission to use all images
- The overlay gradient will be applied automatically to ensure text readability

