const {User,Blog} = require('../models')
const bcrypt = require('bcrypt');

const securePassword = async (password) => {
    try {
        const passwordHash = await bcrypt.hash(password, 10);
        return passwordHash;
    }
    catch (error) {
        console.log(error.message)
    }
}


const loadRegister = async (req, res) => {
    try {
        res.render('registration')

    }
    catch (error) {
        console.log(error.message)
    }
}

const insertUser = async (req, res) => {
    try {
       
        const userexist = await User.findOne({ where: { email: req.body.email } });
        
        if(!userexist) {
        const spassword = await securePassword(req.body.password);
        const user =  User.create({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mno,
            password: spassword,
            is_admin: 0

        });
        res.render("registration",{message:"Registration succesfull"})
    }else{
        res.render("registration",{ message: "user already exist!!!"})

    }

    }
    catch (error) {
        console.log(error.message);
    }
}

// login user 

const loginLoad = async (req, res) => {
    try {
        res.render('login');
    }
    catch (error) {
        console.log(error.message);
    }
};

const verifyLogin = async (req, res) => {
    try {
        

        const email = req.body.email;
        const password = req.body.password;
        console.log(email);
        console.log(User);
        const userData = await User.findOne({  where: { email: req.body.email }  });
        console.log(userData);

        if (userData) {
            const passwordMatch = await bcrypt.compare(password, userData.password)
            if (passwordMatch) {
                console.log("hai : " + userData._id)
                req.session.user_id = userData._id;
                req.session.user1 = true
                res.redirect('/home')
            }

            else {
                res.render('login', { message: 'email and password are incorrect' })
            }
        }
        else {
            res.render('login', { message: 'email and password are incorrect' })
        }



    }
    catch (error) {
        console.log(error.message);
    }
}

const loadHome = async (req, res) => {
    try {

        res.render('home')
    }
    catch (error) {
        console.log(error.message)
    }
}
const loadBlog = async (req, res) => {
    try{
        res.render("blog")
        // const blogs = await Blog.findAll();
        // console.log(blogs[0])
        
}
    catch(error){
        console.log(error.message);
    }
      }

const userLogout = async (req, res) => {
    try {
        req.session.user1 = null;
        res.redirect('/')
    }
    catch (error) {
        console.log(error.message)
    }
      

}



const loadAddBlog = (req, res) => {
        res.render("addBlog");
      }


const addBlog = async (req, res) => {
        try {
          const { title, content, author } = req.body;
        //   console.log(title);
        console.log(req.body);
      
          const blog = await Blog.create({
            title: title,
            content: content,
            image: req.file.filename,
            author: author,
         
          });
        
          res.redirect("/addblog");
        } catch (error) {
          console.log(error);
        }
      };


module.exports = {
    loadRegister,
    insertUser,
    loginLoad,
    verifyLogin,
    loadHome,
    userLogout,
    loadBlog,
    loadAddBlog,
    addBlog
    
}
