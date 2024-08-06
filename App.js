import { Text, SafeAreaView, StyleSheet, SectionList,View } from 'react-native';

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
});
