"use client"

export default function Share({floor}: {floor: string}) {

    const f = floor.split("X")[0];
    
    const onShare = () => {

    if (navigator.share) {
    navigator.share({
      title: 'Meet me At The Lib',
      text: 'On floor ' + f,
      url: window.location.href,
    })
        } else {
                  navigator.clipboard.writeText(window.location.href).then(() => {
                alert("Link copied to clip board");

                      })

            }

    }

    return <button onClick={onShare} style={{ background: '#F56600', fontSize: "40px", padding: "0 20px", borderRadius: "10px" }}>SHARE</button>;
}
