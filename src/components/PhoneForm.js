import React, {Component} from 'react';

class PhoneForm extends Component {

    // Ref 1
    input_name = null;

    // Ref 2 - React v16.3+
    input_phone = React.createRef();


    state = {
        name: '',
        phone: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e) => {
        const {onCreate} = this.props;
        e.preventDefault();
        onCreate(this.state);
        this.setState({
            name: '',
            phone: ''
        });
        // Ref 2
        this.input_phone.current.focus();
        // Ref 1
        this.input_name.focus();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="name"
                    placeholder="이름"
                    onChange={this.handleChange}
                    value={this.state.name}
                    ref={ref => this.input_name = ref}
                    type="text"
                />
                <input
                    name="phone"
                    placeholder="전화번호"
                    onChange={this.handleChange}
                    value={this.state.phone}
                    ref={this.input_phone}
                    type="text"
                />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;