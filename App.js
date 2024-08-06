import { Text, SafeAreaView, StyleSheet, SectionList,View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

let dummyData = [{
  title:'section1',
  data:['item1','item2']
},
{
  title:'section2',
  data:['item1','item2']
},
{
  title:'section3',
  data:['item1','item2']
},
{
  title:'section4',
  data:['item1','item2']
},
]

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <SectionList
      sections={dummyData}
      renderItem={({item,index})=>{
        return <View style={{width:'90%',alignSelf:'center',borderWidth:1,alignItems:'center'}}>
            <Text>{item} </Text>
         </View>
         
      }}
      renderSectionHeader={({section})=>{
        return <Text> {section.title} </Text>
      }}
     />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
