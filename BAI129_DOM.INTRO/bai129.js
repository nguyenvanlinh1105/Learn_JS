// DOM: Document Object modal 


/*
                        Document
                            |
                    ROOT ELEMENT
           __   __    __  __|   __  __ __  __    __ __ 
            |                                        |
        Element (head)                          ELement(body)
            |                        _________      _|________     ______________
        Element(title)               |                  |                       |
            |                     Attribute(href)    Element(<a></a>)       Element(<h1></h1>)
         Text("My title")                                  |                    |
                                                        text('mylink')        Text('myheader')
          ==> TỔNG KẾT CHỈ CÓ 3 THÀNH PHẦN : 
          
                     ELEMENT => ATTRIBUTE => TEXT 

                    ELEMENT: h1, head, body
                     ATTRIBUTE: class, id, src, href
                     TEXT: văn bản ở thẻ 
*/