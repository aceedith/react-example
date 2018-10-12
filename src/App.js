import React, {Component} from 'react';
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {

    id = 3;

    state = {
        keyword: '',
        information: [
            {
                id: 0,
                name: '홍길동',
                phone: '010-3333-3333'
            },
            {
                id: 1,
                name: '김민준',
                phone: '010-4444-4444'
            },
            {
                id: 2,
                name: '벨로포터',
                phone: '010-5555-5555'
            },
        ]
    };

    handleCreate = (data) => {
        const {information} = this.state;

        this.setState({
            // 비구조 할당으로 변경
            // information: this.state.information.concat(data)
            information: information.concat({
                ...data,
                id: this.id++
            })
            // Object.assign() 사용해도 된다.
            // information: information.concat(Object.assign({}, data, {id: this.id++}))
        });
    };

    handleRemove = (id) => {
        const {information} = this.state;
        this.setState({
            information: information.filter(info => info.id !== id)
        });
    };

    handleUpdate = (id, data) => {
        const {information} = this.state;
        this.setState({
            information: information.map(
                info => {
                    if (info.id === id) {
                        return {
                            id,
                            ...data,
                        }
                    }

                    return info;
                }
            )
        })
    };

    handleChange = (e) => {
        this.setState({
            keyword: e.target.value
        })
    };

    render() {
        return (
            <div>
                <PhoneForm onCreate={this.handleCreate}/>
                <input
                    value={this.state.keyword}
                    onChange={this.handleChange}
                    placeholder="검색..."
                    type="text"
                />
                <PhoneInfoList
                    data={this.state.information.filter(
                        info => info.name.indexOf(this.state.keyword) > -1
                    )}
                    onRemove={this.handleRemove}
                    onUpdate={this.handleUpdate}
                />
            </div>
        );
    }
}

export default App;
