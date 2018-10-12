import React, {Component, Fragment} from 'react';

class PhoneInfo extends Component {

    state = {
        editing: false,
        name: '',
        phone: ''
    };


    shouldComponentUpdate(nextProps, nextState) {
        if (this.state !== nextState) {
            // state 는 update 체크
            return true;
        }
        // 이건 부모로 부터 받아온 값의 변경 체크
        return this.props.info !== nextProps.info;
    }


    // 삭제 1번 방법. 아이디가 있으면 더 간단하게 구현 가능
    handleRemove = () => {
        const {info, onRemove} = this.props;
        onRemove(info.id);
    };

    handleToggleEdit = () => {
        // true -> false
        //   onUpdate
        // false -> true
        //   state 에 info 값들 넣어주기
        const {info, onUpdate} = this.props;

        if (this.state.editing) {
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            })
        } else {
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }

        this.setState({
            editing: !this.state.editing
        })
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    render() {
        // 아래 구문은 꼭 render() 함수 안에 있어야 함!!
        // 꼭 PHP extract 함수같다.
        const {name, phone} = this.props.info;
        const {editing} = this.state;

        // 삭제 2번 방법 - 위에서 같이 얻어오면 된다. 구분하기 위해 id를 따로 얻오옴.
        const {id} = this.props.info;
        const {onRemove} = this.props;

        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        console.log(name);

        return (
            <div style={style}>
                {
                    editing ? (
                        <Fragment>
                            <div>
                                <input
                                    name="name"
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                    type="text"
                                />
                            </div>
                            <div>
                                <input
                                    name="phone"
                                    onChange={this.handleChange}
                                    value={this.state.phone}
                                    type="text"
                                />
                            </div>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <div><b>{name}</b></div>
                            <div>{phone}</div>
                        </Fragment>
                    )
                }
                {
                    // 삭제 1번 방법
                }
                <button onClick={this.handleRemove}>삭제</button>
                {
                    // 삭제 2번 방법
                }
                <button onClick={
                    () => {
                        onRemove(id)
                    }
                }>삭제2
                </button>
                <button onClick={this.handleToggleEdit}>
                    {editing ? '적용' : '수정'}
                </button>
            </div>
        );
    }
}

export default PhoneInfo;