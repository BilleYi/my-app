import React from 'react';

function Detail(props){
    return <h1>Detail-page:{props.match.params.id}</h1>
}

export default Detail;