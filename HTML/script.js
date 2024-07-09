/* 
    things happen after hitting enter in url section;
        http request
            get request
            return html 
            dns
    head tag: meta information of the html
        title
        meta tag: meta data charset, author, description...
    body tag: html content
        block element: take up the whole line
            div 
        inline element: 
            span, button, input, a, img
        semantic tag: meaningful html elements
            SEO: search engine optimization
            accessibility: screen reader

    critical rendering path:
        parse html: from top to bottom, document object model(DOM), tree
        parse css: css object model(CSSOM) tree
        execute js:
        render dom tree
        paint: 

    script tag:
        async: download the js file concurrently
        defer: download and execute the js file until the html is ready
    
    css:
        source
            inline style
            internal css
            external css file
            inline > internal css >  external css
        css selector:
            tag(element) selector
            class selector
            id selector
            combinator selector
                descendent
                child
                adjacent 
                sibling
            pseudo class
        css specificity: priority of selectors
            combinator selector > id > class > type(tag)
            !important




*/

//console.log("hello world");

const ele1 = document.querySelector("#div2");
console.log(ele1);
