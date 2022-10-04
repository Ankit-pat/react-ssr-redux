import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../store/actions/users'

class UserList extends React.Component {
    componentDidMount() {
        this.props.fetchUsers()
    }


    render() {
        console.log(this.props.users, 'users list')
        return (
            <div>
                Big list of users
                <ul>
                    {this.props.users.map(user => {
                       return <li key={user.id}>{user.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export function loadData(store) {
   return store.dispatch(fetchUsers())
}

export default connect(mapStateToProps, {
    fetchUsers
})(UserList);