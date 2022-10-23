when you're using next image with an external image, 

```js
<div className={styles.imageWrapper}>
    <Image 
        src='https://i.etsystatic.com/26267173/r/il/204a96/3736851009/il_1588xN.3736851009_e5f0.jpg' 
        objectFit='contain' // maintains aspect ratio
        layout='fill' // fills container
    />
</div>
```

```scss
.imageWrapper {
    position: relative; // ?places container within parent element? makes it so that it doesn't fill in what seems like absolute
    // height: 300px;
    // width: 300px;
}
```