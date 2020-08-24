import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import UserScreen from './screens/Users';
import PostsScreen from './screens/Posts';
import DetailScreen from './screens/Detail';

const AppNavigator = createStackNavigator({
  Users: UserScreen,
  Posts: PostsScreen,
  Detail: DetailScreen,
}, {
  initialRouteName: 'Users'
})

export default createAppContainer(AppNavigator)

