const symbols = `<symbol id="bold" viewBox="0 0 32 32"><path d="M22.996 15.023c1.339-1.591 2.147-3.643 2.147-5.88 0-5.041-4.102-9.143-9.143-9.143h-11.429v32h13.714c5.041 0 9.143-4.102 9.143-9.143 0-3.32-1.779-6.232-4.433-7.834zM11.429 4.571h3.625c1.999 0 3.625 2.051 3.625 4.571s-1.626 4.571-3.625 4.571h-3.625v-9.143zM17.107 27.429h-5.679v-9.143h5.679c2.087 0 3.786 2.051 3.786 4.571s-1.698 4.571-3.786 4.571z"></path></symbol>
<symbol id="emoji" viewBox="0 0 32 32"><path d="M16 24.789c-3.756 0-6.911-2.254-8.188-5.559h16.376c-1.277 3.305-4.432 5.559-8.188 5.559zM10.366 14.423c-1.352 0-2.404-1.052-2.404-2.404s1.052-2.404 2.404-2.404 2.404 1.052 2.404 2.404-1.052 2.404-2.404 2.404zM21.634 14.423c-1.352 0-2.404-1.052-2.404-2.404s1.052-2.404 2.404-2.404 2.404 1.052 2.404 2.404-1.052 2.404-2.404 2.404zM16 28.845c7.061 0 12.845-5.784 12.845-12.845s-5.784-12.845-12.845-12.845-12.845 5.784-12.845 12.845 5.784 12.845 12.845 12.845zM16 0c8.864 0 16 7.136 16 16s-7.136 16-16 16-16-7.136-16-16 7.136-16 16-16z"></path></symbol>
<symbol id="italic" viewBox="0 0 32 32"><path d="M29.714 0v2.286h-4.571l-11.429 27.429h4.571v2.286h-16v-2.286h4.571l11.429-27.429h-4.571v-2.286z"></path></symbol>
<symbol id="quote" viewBox="0 0 32 32"><path d="M7.024 13.003c3.862 0 6.993 3.131 6.993 6.993s-3.131 6.993-6.993 6.993-6.993-3.131-6.993-6.993l-0.031-0.999c0-7.724 6.262-13.986 13.986-13.986v3.996c-2.668 0-5.177 1.039-7.064 2.926-0.363 0.363-0.695 0.75-0.994 1.156 0.357-0.056 0.723-0.086 1.096-0.086zM25.007 13.003c3.862 0 6.993 3.131 6.993 6.993s-3.131 6.993-6.993 6.993-6.993-3.131-6.993-6.993l-0.031-0.999c0-7.724 6.262-13.986 13.986-13.986v3.996c-2.668 0-5.177 1.039-7.064 2.926-0.363 0.363-0.695 0.75-0.994 1.156 0.357-0.056 0.723-0.086 1.096-0.086z"></path></symbol>
<symbol id="unordered-list" viewBox="0 0 32 32"><path d="M12 2h20v4h-20v-4zM12 14h20v4h-20v-4zM12 26h20v4h-20v-4zM0 4c0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.209-1.791-4-4-4s-4 1.791-4 4zM0 16c0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.209-1.791-4-4-4s-4 1.791-4 4zM0 28c0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.209-1.791-4-4-4s-4 1.791-4 4z"></path></symbol>
<symbol id="ordered-list" viewBox="0 0 32 32"><path d="M11 26h20v4h-20zM11 14h20v4h-20zM11 2h20v4h-20zM5 0v8h-2v-6h-2v-2zM3 16.438v1.563h4v2h-6v-4.563l4-1.875v-1.563h-4v-2h6v4.563zM7 22v10h-6v-2h4v-2h-4v-2h4v-2h-4v-2z"></path></symbol>
<symbol id="fullscreen" viewBox="0 0 32 32"><path d="M32 0v13l-5-5-6 6-3-3 6-6-5-5zM14 21l-6 6 5 5h-13v-13l5 5 6-6z"></path></symbol>
<symbol id="question" viewBox="0 0 32 32"><path d="M14 22h4v4h-4zM22 8c1.105 0 2 0.895 2 2v6l-6 4h-4v-2l6-4v-2h-10v-4h12zM16 3c-3.472 0-6.737 1.352-9.192 3.808s-3.808 5.72-3.808 9.192c0 3.472 1.352 6.737 3.808 9.192s5.72 3.808 9.192 3.808c3.472 0 6.737-1.352 9.192-3.808s3.808-5.72 3.808-9.192c0-3.472-1.352-6.737-3.808-9.192s-5.72-3.808-9.192-3.808zM16 0v0c8.837 0 16 7.163 16 16s-7.163 16-16 16c-8.837 0-16-7.163-16-16s7.163-16 16-16z"></path></symbol>
<symbol id="contract" viewBox="0 0 32 32"><path d="M14 18v13l-5-5-6 6-3-3 6-6-5-5zM32 3l-6 6 5 5h-13v-13l5 5 6-6z"></path></symbol>
<symbol id="link" viewBox="0 0 32 32"><path d="M29.187 2.933l-0.12-0.121c-2.813-2.812-7.415-2.812-10.228 0l-6.516 6.517c-2.812 2.812-2.812 7.415 0 10.227l0.12 0.12c0.234 0.234 0.482 0.446 0.739 0.641l2.386-2.386c-0.278-0.164-0.542-0.361-0.78-0.599l-0.121-0.121c-1.527-1.527-1.527-4.012 0-5.539l6.517-6.516c1.527-1.527 4.012-1.527 5.539 0l0.121 0.12c1.527 1.527 1.527 4.012 0 5.539l-2.948 2.948c0.512 1.264 0.754 2.611 0.733 3.955l4.559-4.559c2.812-2.812 2.812-7.415-0-10.227zM19.557 12.323c-0.234-0.234-0.482-0.446-0.739-0.641l-2.386 2.385c0.278 0.164 0.542 0.361 0.78 0.599l0.121 0.121c1.527 1.527 1.527 4.012 0 5.539l-6.517 6.517c-1.527 1.527-4.012 1.527-5.539 0l-0.121-0.121c-1.527-1.527-1.527-4.012 0-5.539l2.948-2.948c-0.512-1.264-0.754-2.611-0.733-3.955l-4.559 4.559c-2.812 2.812-2.812 7.415 0 10.228l0.12 0.12c2.813 2.812 7.415 2.812 10.228 0l6.516-6.517c2.812-2.812 2.812-7.415 0-10.228l-0.12-0.12z"></path></symbol>
<symbol id="view" viewBox="0 0 32 32"><path d="M16 7.53c-10.379 0-15.561 7.594-15.777 7.918-0.223 0.335-0.223 0.771 0 1.106 0.216 0.323 5.398 7.917 15.777 7.917s15.561-7.594 15.777-7.918c0.223-0.335 0.223-0.771 0-1.106-0.216-0.323-5.398-7.917-15.777-7.917zM16 22.477c-7.726 0-12.34-4.822-13.696-6.479 1.352-1.661 5.941-6.475 13.696-6.475 7.726 0 12.34 4.822 13.696 6.479-1.352 1.661-5.941 6.475-13.696 6.475zM16 11.516c-2.473 0-4.484 2.012-4.484 4.484s2.011 4.484 4.484 4.484 4.484-2.012 4.484-4.484-2.011-4.484-4.484-4.484zM16 18.491c-1.374 0-2.491-1.118-2.491-2.491s1.118-2.491 2.491-2.491 2.491 1.118 2.491 2.491-1.118 2.491-2.491 2.491z"></path></symbol>
<symbol id="upload" viewBox="0 0 32 32"><path d="M21.334 16.532q0-0.233-0.15-0.384l-5.867-5.867q-0.15-0.15-0.384-0.15t-0.384 0.15l-5.85 5.85q-0.167 0.2-0.167 0.399 0 0.233 0.15 0.384t0.384 0.15h3.733v5.867q0 0.217 0.159 0.375t0.375 0.159h3.2q0.217 0 0.375-0.159t0.159-0.375v-5.867h3.734q0.217 0 0.375-0.159t0.159-0.375zM32 21.332q0 2.65-1.875 4.525t-4.525 1.875h-18.133q-3.083 0-5.275-2.192t-2.192-5.275q0-2.166 1.167-4t3.134-2.75q-0.034-0.5-0.034-0.717 0-3.533 2.5-6.033t6.033-2.5q2.6 0 4.759 1.45t3.142 3.849q1.184-1.033 2.767-1.033 1.767 0 3.017 1.25t1.25 3.017q0 1.267-0.683 2.3 2.166 0.516 3.558 2.258t1.392 3.975z"></path></symbol>`

export default symbols