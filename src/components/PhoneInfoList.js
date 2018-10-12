import React, {Component} from 'react';
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
    // 1. 초기값 지정으로 map undefined 해결
    static defaultProps = {
        data: []
    };

    render() {
        const {data, onRemove, onUpdate} = this.props;
        // 2. data 값이 없으면 더이상 처리 안함.
        if (!data) return null;

        const list = data.map(
            info => (
                <PhoneInfo
                    onRemove={onRemove}
                    onUpdate={onUpdate}
                    info={info}
                    key={info.id}
                />
            )
        );

        console.log('rendering list');

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;