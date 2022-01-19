import * as Yup from 'yup';

export const signupSchema = Yup.object().shape({
    
    firstName: Yup.string().required(() => {
      return 'First Name is required';
    }),
    email: Yup.string()
      .email(() => {
        return 'Must be a valid email address';
      })
      .required(() => {
        return 'Email is is required';
      }),
    password: Yup.string().required(() => {
        return 'Password is required';
    }).matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
  });

  export const loginSchema = Yup.object().shape({
    email: Yup.string()
    .email(() => {
      return 'Must be a valid email address';
    })
    .required(() => {
      return 'Email is is required';
    }),
      password: Yup.string().required('Password is required')
  })
  export const resetPasswordSchema = Yup.object().shape({
    email: Yup.string()
    .email(() => {
      return 'Must be a valid email address';
    })
    .required(() => {
      return 'Email is is required';
    })
  })

  export const updatePasswordSchema = Yup.object().shape({
    password: Yup.string().required(() => {
        return 'Password is required';
    }).matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    passwordConfirmation: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match')

  })