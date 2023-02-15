const data = []
const searchParams = new URLSearchParams(location.search)
for (const [key, value] of searchParams.entries()) {
    data.push([key,value])
}
const sunburst = new Sunburst({
    colors: {
        "res": "#28f428",
        "enl": "#00c2ff",
        "key": "#F6BC33",
        "nkey": "gray",
        "def": "lime",
        "atk": "red",
        "cmn": "#0FAE76",
        "rare": "#753E71",
        "xr": "pink",
        "apex": "#950007",
        "flip": "brown",
        "hyp": "#BC119F",
        "l1": "#fece5a",
        "l2": "#ffa630",
        "l3": "#ff7315",
        "l4": "#e40000",
        "l5": "#fd2992",
        "l6": "#eb26",
        "l7": "#c124e0",
        "l8": "#9627f4",
        "space": "#111",
    }
}).setData(data)