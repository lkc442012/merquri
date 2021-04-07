import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';

class ContactDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      focusDescriptionInput: false,
    };
  }

  componentDidMount() {
    const {params} = this.props.navigation.state;

    this.setState({firstName: params.firstName});
    this.setState({lastName: params.lastName});
    this.setState({email: params.email});
    this.setState({phone: params.phone});
  }

  static navigationOptions = {
    headerVisible: false,
  };

  validate(contacts) {
    if (this.state.firstName.trim() === '') {
      alert('Please fill in first name.');
    } else if (this.state.lastName.trim() === '') {
      alert('Please fill in first name.');
    } else this.props.navigation.navigate('Contact', contacts);
  }

  render() {
    const {params} = this.props.navigation.state;
    let contacts = {};
    contacts.id = params.id;
    contacts.firstName = this.state.firstName;
    contacts.lastName = this.state.lastName;
    contacts.email = this.state.email;
    contacts.phone = this.state.phone;

    return (
      <View style={styles.container}>
        <View style={styles.saveContainer}>
          <TouchableHighlight
            underlayColor="white"
            onPress={() => this.validate(contacts)}>
            <Text style={styles.save}>Save</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.header}>
          <View style={styles.profilePicture} />
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>Main Information</Text>
        </View>
        <View style={styles.smallTitle}>
          <View style={{width: '20%'}}>
            <Text>First Name</Text>
          </View>
          <View style={styles.box}>
            <TextInput
              style={styles.titleInput}
              returnKeyType={'next'}
              autoFocus={true}
              onChangeText={value => this.setState({firstName: value})}
              value={this.state.firstName}
              onSubmitEditing={() => {
                this.lastName.focus();
              }}
            />
          </View>
        </View>
        <View style={styles.smallTitle}>
          <View style={{width: '20%'}}>
            <Text>Last Name</Text>
          </View>
          <View style={styles.box}>
            <TextInput
              ref={input => {
                this.lastName = input;
              }}
              style={styles.titleInput}
              returnKeyType={'next'}
              autoFocus={true}
              onChangeText={value => this.setState({lastName: value})}
              value={this.state.lastName}
              onSubmitEditing={() => {
                this.email.focus();
              }}
            />
          </View>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>Sub Information</Text>
        </View>
        <View style={styles.smallTitle}>
          <View style={{width: '20%'}}>
            <Text>Email</Text>
          </View>
          <View style={styles.box}>
            <TextInput
              ref={input => {
                this.email = input;
              }}
              style={styles.titleInput}
              returnKeyType={'next'}
              autoFocus={true}
              onChangeText={value => this.setState({email: value})}
              value={this.state.email}
              onSubmitEditing={() => {
                this.phone.focus();
              }}
            />
          </View>
        </View>
        <View style={styles.smallTitle}>
          <View style={{width: '20%'}}>
            <Text>Phone</Text>
          </View>
          <View style={styles.box}>
            <TextInput
              ref={input => {
                this.phone = input;
              }}
              style={styles.titleInput}
              returnKeyType={'next'}
              autoFocus={true}
              onChangeText={value => this.setState({phone: value})}
              value={this.state.phone}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
    margin: 10,
  },
  title: {
    backgroundColor: 'lightgray',
    margin: 10,
  },
  titleText: {
    margin: 5,
    fontWeight: 'bold',
  },
  smallTitle: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 15,
  },
  profilePicture: {
    marginRight: 10,
    height: 80,
    width: 80,
    backgroundColor: '#ff8c00',
    borderRadius: 50,
  },
  box: {
    marginLeft: 10,
    width: '70%',
    height: '80%',
    borderWidth: 1,
    borderColor: 'gray',
  },
  saveContainer: {
    alignItems: 'flex-end',
  },
  save: {
    margin: 10,
    color: 'orange',
  },
});

export default ContactDetails;
