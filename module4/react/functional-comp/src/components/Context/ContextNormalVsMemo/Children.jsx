import GrandChildren from "./GrandChildren"


function Children(){
    console.log('rendered Children')
    return (
        <>
            <p>I am a Child</p>
            <GrandChildren></GrandChildren>
        </>
    )
}

export default Children