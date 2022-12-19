import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Dimensions} from 'react-native';
// import R from '../constants/api';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
// import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import MapViewDirections from 'react-native-maps-directions';
import {mapKey} from '../constants/api';
import haversine from 'haversine';

import {stringTrim} from '../common/funcs';
import { user } from '../constants/dummyData';
import { colors } from '../constants/colors';
// import {rideDistance, rideTime} from '@store/user/userSlice';

function Maps(props) {
  const {navigation, location} = props;
//   useSelector(state => state.user);
//   const dispatch =
//    useDispatch();
  const mapRef = useRef(null);

  const pickUpLat = user?.pickupLoc?.latitude;
  const pickUpLong = user?.pickupLoc?.longitude;
  const dropOffLat = user?.dropOffLoc?.latitude;
  const dropOffLong = user?.dropOffLoc?.longitude;
  const addressRawDropOff = user?.dropOffLoc?.address;
  const dropOffAddr = stringTrim(addressRawDropOff, 1);
  const addressRawPickup = user?.pickupLoc?.address;
  const pickUpAddr = stringTrim(addressRawPickup, 1);
//   const initialLat = user?.user?.currentLocation?.coordinates[1] ||  33.8688;
//   const initialLong = user?.user?.currentLocation?.coordinates[0] || 151.2093
  const initialLat = user?.user?.currentLocation?.coordinates[1] ||  51.509865;
  const initialLong = user?.user?.currentLocation?.coordinates[0] || -0.118092
  const load = user?.locationLoader;

  
  const [time, setTime] = useState(0);
  const [changeLoc, setChangeLoc] = useState('');

  let origin = {
    latitude: pickUpLat ? pickUpLat : 33.8688,
    longitude: pickUpLong ? pickUpLong : 151.2093,
  };

  let destination = {
    latitude:dropOffLat ? Number(dropOffLat) : 24.917075,
    longitude:  dropOffLong ? Number(dropOffLong) : 67.090969,
  };

//   useEffect(() => {
//     if (user?.dropOffLoc !== undefined) {
//       getDistance();
//     }
//   }, [origin, destination]);

//   useEffect(() => {
//     if (user?.dropOffLoc !== undefined) {
//       // if (changeLoc !== dropOffLat) {
//       setChangeLoc(dropOffLat);
//       animateDropOff();
//       // }
//     }
//   }, [user?.dropOffLoc]);

//   useEffect(() => {
//     if (user?.pickupLoc !== undefined) {
//       if (initialLat !== pickUpLat) {
//         // animatePickup();
//       }
//     }
//   }, [user?.pickupLoc]);

  const getDistance = () => {
    let calcDist = haversine(origin, destination);
    let distance = Math.ceil((calcDist * 1000).toFixed(2));
    // dispatch(rideDistance(distance));
    // dispatch(rideTime(time));
  };

  const animateDropOff = () => {
    let region = {
      latitude: Number(dropOffLat),
      longitude: Number(dropOffLong),
      latitudeDelta: 0.002,
      longitudeDelta: 0.002,
    };
    mapRef.current.animateToRegion(region, 2000);
  };

  const animatePickup = () => {
    let region = {
      latitude: Number(pickUpLat),
      longitude: Number(pickUpLong),
      latitudeDelta: 0.032,
      longitudeDelta: 0.032,
    };
    mapRef.current.animateToRegion(region, 2000);
  };

  return (
    <SafeAreaView style={{flex:1,width:'100%'}}>
      <MapView
    
    style={[styles.mapView,{...props?.style}]}
        // cacheEnabled={false}
        ref={mapRef}
        // loadingEnabled={true}
        provider={PROVIDER_GOOGLE}
        // loadingIndicatorColor={R.color.mainColor}
        // loadingBackgroundColor={'rgba(0,0,0,0.3)'}
        region={{
          latitude: initialLat,
          longitude:  initialLong,
          latitudeDelta: 0.022,
          longitudeDelta: 0.022,
        }}>
        {/* <Marker
          coordinate={{
            latitude:initialLat,
            longitude:  initialLong,
          }}
          tracksViewChanges={false}
          title={'User'}>
          <View 
        //   style={R.styles.columnView}
          >
            <Text
            //   variant={'body6'}
            //   font={'bold'}
            //   color={R.color.charcoalShade}
              style={{
                // backgroundColor: R.color.mainColor,
                // padding: R.unit.scale(6),
                // borderRadius: R.unit.scale(2),
              }}
            //   align={'center'}
            //   transform={'none'}
              >
              {pickUpAddr ? pickUpAddr : 'PickUp'}
            </Text>
            <Icon
              name={'user'}
            //   type={'FontAwesome'}
              size={25}
            //   color={R.color.black}
            />
          </View>
        </Marker> */}

        {/* {user?.dropOffLoc !== undefined && (
          <Marker
            coordinate={{
              latitude: dropOffLat ? Number(dropOffLat) : 24.917075,
              longitude: dropOffLong ? Number(dropOffLong) : 67.090969,
            }}
            tracksViewChanges={false}
            // pinColor={R.color.blackLightShade}
            >
            <View 
            // style={R.styles.columnView}
            >

              <Text
                variant={'body6'}
                font={'bold'}
                // color={R.color.charcoalShade}
                style={{
                //   backgroundColor: R.color.mainColor,
                //   padding: R.unit.scale(6),
                //   borderRadius: R.unit.scale(2),
                }}
                align={'center'}
                transform={'none'}>
                {dropOffAddr ? dropOffAddr : 'DropOff'}
              </Text>
              <Icon
                name={'location-sharp'}
                type={'Ionicons'}
                size={30}
                // color={R.color.black}
              />
            </View>
          </Marker>
        )} */}
        {user?.dropOffLoc !== undefined && (
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={mapKey}
            strokeWidth={3}
            strokeColor={colors.black}
            // strokeColor={R.color.black}
            timePrecision={'now'}
            precision={'high'}
            mode={'DRIVING'}
            optimizeWaypoints={true}
            splitWaypoints={true}
            onReady={result => {
              setTime(result.duration);
            }}
          />
         )} 
      </MapView>
    </SafeAreaView>
  );
}
export default Maps;

const styles = StyleSheet.create({
  mapView: {
    // height: R.unit.height(1),
    // width: R.unit.width(1),
    // top: 0,
    flex:1,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    
  },
});
