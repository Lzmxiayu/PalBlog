import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import SingleBlog from './components/SingleBlog'
import EditBlog from './components/EditBlog'
import Cover from './components/Cover'
import NavContent from './components/NavContent'
import MessageBoard from './components/MessageBoard'
import PhotosWall from './components/PhotosWall'



export default[
    {path:"/",
    component:Cover},//ShowBlogs},
    {path:"/nc",
    component:NavContent,
    children:[
       
        {path:"add",component:AddBlog},
        {path:"blogs",component:ShowBlogs},
        {path:"edit/:id",component:EditBlog},
        {path:"bbs",component:MessageBoard},
        {path:"pow",component:PhotosWall}, 
        {path:"blog/:id",component:SingleBlog,},    
    ]
    },
    // {path:"/mp",component:MusicPlayer},
    
]