webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/markdown.js":
/*!********************************!*\
  !*** ./components/markdown.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var markdown = {
  h1: "# One hashtag = H1",
  h2: "## Two hashtags = H2",
  h3: "### Three hashtags = H3",
  h4: "#### Four hashtags = H4",
  h5: "##### Five hashtags = H5",
  h6: "###### Six hashtags = H6",
  italic: "Wrap text in asterisks = *Italicized Text*",
  bold: "Wrap text in double asterisks = **Bold Text**",
  horizontal_line: "A line with three underscores with no spaces and no other characters\r\r**RESULT:**\r___\r\r\rA line with three asterisks with no spaces and no other characters\r\r**RESULT:**\r***\r\r\r\r\r\rA line with three dashes with no spaces and no other characters\r\r**RESULT:**\r---"
};
/* harmony default export */ __webpack_exports__["default"] = (markdown);
/*

*Note: the three underscores or asterisks or dashes must be the only characters on the line for this to work*
    
    ---
    
    
    
    
    Wrap text in backticks = \` Text color and background color are switched \`\r
    
    Wrap text in square brackets followed by url wrapped in parentheses = [[link] (url)](https://en.wikipedia.org/wiki/Hyperlink)\r
    *Note: Don't put any space between the square brackets and the parentheses*\r
    
    > Start line with one \> character = Indented blockquote
    
    > > Start line with two \> characters = Double indented blockquote
    
    
    ---
    
    
    
    1. Start each line with a number + a period + a space + Your text= Numbered List
    3. Number + Period = &#50;. Your text
    4. (&#52;.) You can use any number you want
    4. (&#52;.) Markdown will still show the next number
    10. (&#49;&#48;.) Markdown will still show the next sequential number
    
    - Start each line with a dash plus a space = Bulleted list
    - Start each line with a dash plus a space = Bulleted list
    - Start each line with a dash plus a space = Bulleted list
    - Start each line with a dash plus a space = Bulleted list
    
    
    
    ---
    
    
    
    **INPUT:**
    
    &#96; &#96; &#96; 
    var code = function(){
    > alert( "Wrap you code in a pair of triple \r backticks to create a multi-line code block" ); \r
    > //To indent lines of code use tabs
    
    };
    
    code();
    &#96; &#96; &#96;
    
    **OUTPUT:**
    
    \`\`\` 
    var code = function(){
        alert( "Wrap you code in a pair of triple 
        backticks to create a multi-line code block" );
        //To indent lines of code use tabs
    };
    
    code();
    \`\`\`
    
    
    
    ---
    
    
    
    **INPUT:**
    
    &#33;&#91; Description of the image &#93;&#40; the image URL &#41;
    
    **OUTPUT:**
    
    ![React Logo w/ Text](https://goo.gl/Umyytc)
    
    
    
    ---
    
    
    
    **INPUT:**
    
    &#124; To Create &#124; A Table: &#124; Wrap Text &#124; In Pipe (or vertical slash) symbols &#124;
    &#124; - &#124;- &#124; - &#124; - &#124;
    &#124; On the 2nd line &#124; Type Pipe + Dash &#124; Once For Every &#124; Table Cell in the Row &#124;
    &#124; For Every &#124; Row &#124;  Wrap Text &#124; In Pipes &#124;
    &#124; If There Are Less Cells &#124; The Table Will Automatically &#124; Fill In Blank Cells &#124;
    
    **OUTPUT:**
    
    | To Create | A Table: | Wrap Text | In Pipe (or vertical slash) symbols |
    |- | - | -| -|
    | On the 2nd line | Type Pipe + Dash | Once For Every | Table Cell in the Row |
    | For Every | Row |  Wrap Text | In Pipes |
    | If There Are Less Cells | The Table Will Automatically | Fill In Blank Cells |
    
    
    
    
    ``
}
*/

/***/ })

})
//# sourceMappingURL=index.js.f5489a9fdddb660efb6b.hot-update.js.map