import React, { useEffect, useState } from 'react';
// import { Rating } from 'react-native-ratings';
import { Rating } from 'react-native-elements';
// import StarRating from 'react-native-star-rating';
import { colors } from '../constants/colors';

const Stars = props => {
    const {
        state,
        setter,
        starSize = 30,
        ratingCallBack,
        fullStarColor = colors.mainColor,
        emptyStarColor = colors.mainColor,
        containerStyles,
        stars = 2,
        disabled = false,
    } = props;

    const [starsCount, setStarsCount] = useState(stars);
    //   useEffect(() => {
    //     setStarsCount(stars);
    //   }, [props]);

    //   const ratingStars = data => {
    //     ratingCallBack(data);
    //     setStarsCount(data);
    //   };

    return (
        // <Rating
        //     // showRating
        //     // type="star"
        //     fractions={1}
        //     ratingCount={5}
        //     startingValue={state}
        //     // readonly
        //     imageSize={40}
        //     onFinishRating={(e)=>setter(e)}
        //     style={{ paddingVertical: 10 }}
        //     ratingBackgroundColor={colors.white}
        //     type="custom"
        //     ratingColor={colors.mainColor}
        //    borderColor={'red'}            

        // //   selectedStar={rating => ratingStars(rating)}
        // />\

        <Rating
            type='custom'
            ratingCount={5}
            imageSize={30}
             onFinishRating={(e)=>setter(e)}
            style={{ paddingVertical: 10 }}
            startingValue={state}
        />
    );
};
export default Stars;
