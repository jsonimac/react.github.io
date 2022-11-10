function Box() {
    return ( 
        <>
            <h2>Inside box</h2>
        </>
     );
}

export default function TicTacToe() {
    return (
        <>
            Outside Box
            <Box />
        </>
    );
}
