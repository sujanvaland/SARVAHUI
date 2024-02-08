let commentList = []

const arrangeComment = (comment) => {

    if(!comment || commentList.length === 0 || !commentList)
    {
        return []
    }

    let children = [...commentList.filter(x => x.parentId.toString() === comment.id.toString())]

    if(children.length === 0)
    {
        return []
    }

    commentList = [...commentList.filter(x => x.parentId.toString() !== comment.id.toString())]

    children = children.map(x => {
        return {
            ...x,
            children: arrangeComment(x,commentList)
        }
    })
    return children
}

const eliminateDuplicated = (list) => {
   
    let i; let j;
    
    // eslint-disable-next-line no-plusplus
    for(i=0;i<list.length;i++)
    {
        const sublist = list[i].children 
        // eslint-disable-next-line no-plusplus
        for(j=0;j<sublist.length;j++)
        {
            // eslint-disable-next-line no-loop-func
            list = list.filter(x => x.id.toString() !== sublist[j].id.toString())
        }
    }
  
    return list;
  };

export const formatComment = (comments) => {
    const rescommentlist = []

    commentList = [...comments]

    commentList.forEach(comment => {

        const obj = {
            ...comment,
            children: arrangeComment(comment)
        }
        rescommentlist.push(obj)
    })

    const result = eliminateDuplicated(rescommentlist);

    return result
}