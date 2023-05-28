
const getFontData = function (fontSize, fontWeight, args) {
    if (args === undefined) args = {}
    if ("fontFamily" in args === false)
        args["fontFamily"] = "Poppins"
    if ("fontStyle" in args === false)
        args["fontStyle"] = "normal"
    if ("lineHeight" in args === false)
        args["lineHeight"] = "26px"
    if ("color" in args === false)
        args["color"] = "#092C4C"
    args["fontSize"] = fontSize
    args["fontWeight"] = fontWeight
    console.log(args)
    return args
};

export default getFontData;