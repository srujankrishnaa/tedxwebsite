# Speaker Images Directory

This directory should contain speaker profile images for the TEDxGRIET event page.

## Image Naming Convention

Please name your speaker images as follows:
- `speaker1.jpg`
- `speaker2.jpg`
- `speaker3.jpg`
- `speaker4.jpg`
- `speaker5.jpg`
- `speaker6.jpg`

## Image Requirements

- **Format**: JPG, JPEG, or PNG
- **Recommended Size**: 800x800 pixels (square format)
- **Aspect Ratio**: 1:1 (square)
- **Max File Size**: 500KB per image
- **Quality**: High resolution for clear display

## Current Setup

The EventSpeakers component will:
1. Try to load the speaker image from this directory
2. If the image is not found, display a placeholder with the speaker number
3. Show a "Coming Soon" badge until images are added

## Adding New Speakers

To add more speakers, update the `speakers` array in `src/components/EventSpeakers.jsx` with the speaker details:

```javascript
{
  name: 'Speaker Name',
  title: 'Title/Profession',
  bio: 'Short biography',
  image: '/speakers/speakerX.jpg'
}
```

