import React, { useEffect, useState, createRef } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions, ActivityIndicator } from 'react-native';
const { height, width } = Dimensions.get('window')
import useApi from "../../helpers/apiCall";
import Header from "../../component/header";




const getTransactions = async () => {
  const result = await useApi('/consumer/payments/transaction/')
  return result?.data?.results;
}

const HomeScreen = () => {
  const [transactionArr, setTransactionArr] = useState([])
  const [loadingMore, setLoadingMore] = useState(false);
  const [animating, setAnimating] = useState(true);

  const getTransactionList = async () => {
    let temp = await getTransactions();
    setTransactionArr(temp);
    setAnimating(false)
  }
  useEffect(() => {
    getTransactionList()

  }, [])

  useEffect(() => {
    console.log('transactionArr-->>', transactionArr)
  }, [transactionArr])

  const transactionListView = (item, index) => {
    return (

      <View>
        <View style={styles.mainContainer}>
          <Text style={styles.textStyle}>{`Name: ${item.consumer_name}`}</Text>
          <Text style={styles.textStyle}>{`Amount: ${item.amount}`}</Text>
          <Text style={styles.textStyle}>{`Payment Mode: ${item.payment_mode}`}</Text>
          <Text style={styles.textStyle}>{`Status: ${item.payment_status}`}</Text>
        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={{ flex: 1, marginHorizontal: 20 }}>
        <ActivityIndicator animating={animating} size="large" color="#000000" style = {styles.activityIndicator} />

        <FlatList
          data={transactionArr}
          renderItem={({ item, index }) => transactionListView(item, index)}
          numColumns={2}
          showsVerticalScrollIndicator={false} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  mainContainer: {
    height: ((width - 50) / 8) * 2.2, width: (width - 50) / 2, backgroundColor: '#fff', borderRadius: 8,
    marginRight: 8,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, alignItems: 'center', justifyContent: 'center',
  },
  textStyle: {
    fontSize: 14, color: '#000000'
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
 }


});

export default HomeScreen;
