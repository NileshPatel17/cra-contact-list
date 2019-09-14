import React from 'react';
import { Formik, FieldProps, Field, FormikProps, FormikActions } from 'formik';
import * as Yup from 'yup';
import { IContact } from '../../models';

const contactFormSchema = () => {
  return Yup.object().shape({
    firstName: Yup.string().required('first name is required'),
    lastName: Yup.string().required('last name is required'),
    email: Yup.string()
      .required('required')
      .email('Email is not valid'),
    gender: Yup.mixed<'male' | 'female'>().oneOf(['male', 'female']).required('required'),
    phone: Yup.string()
      .required('required')
      .matches(/^\d{10}$/, {
        message: 'Please enter valid phone number must be of 10 digits.',
        excludeEmptyString: false
      }),
    address: Yup.string()
  });
};

interface IContactFormProps {
  onAddContact: (formData: IContact) => void;
}

export const ContactForm: React.SFC<IContactFormProps> = (
  props: IContactFormProps
) => {
  const initialValues: IContact = {
    id: 0,
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    getCallback: false
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactFormSchema()}
      // validateOnBlur={false}
      onSubmit={(values: IContact, actions: FormikActions<IContact>) => {
        console.log('submit', values);
        props.onAddContact(values);
      }}
      render={(formikBag: FormikProps<IContact>) => (
        <form onSubmit={formikBag.handleSubmit} className="w-full max-w-lg border border-blue400 border-round m-4 p-4">
          <div className="font-bold text-xl mb-2 ml-2" data-test='data-new-contact'>Create New Contact</div>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 px-3 mb-6 md:mb-0">
              <label
                htmlFor="firstName"
                className="text-sm block font-bold  pt-2 pb-2"
              >
                First Name
              </label>
              <Field
                name="firstName"
                render={({ field, form }: FieldProps<IContact>) => (
                  <React.Fragment>
                    <input
                      name="firstName"
                      data-test="input-firstName"
                      className="input__textbox"
                      placeholder="First Name"
                      {...field}
                    />
                    <span className="text-red-500 text-xs italic">
                      {form.touched.firstName &&
                        form.errors.firstName &&
                        form.errors.firstName}
                    </span>
                  </React.Fragment>
                )}
              />
            </div>
            <div className="w-full lg:w-1/2 px-3 mb-6 md:mb-0">
              <label
                htmlFor="lastName"
                className="text-sm block font-bold  pt-2 pb-2"
              >
                Last Name
              </label>
              <Field
                name="lastName"
                render={({ field, form }: FieldProps<IContact>) => (
                  <React.Fragment>
                    <input
                      name="lastName"
                      data-test="input-lastName"
                      className="input__textbox"
                      placeholder="Last Name"
                      {...field}
                    />
                    <span className="text-red-500 text-xs italic">
                      {form.touched.lastName &&
                        form.errors.lastName &&
                        form.errors.lastName}
                    </span>
                  </React.Fragment>
                )}
              />
            </div>
            <div className="w-full lg:w-1/2 px-3 mb-6 md:mb-0">
              <label
                htmlFor="gender"
                className="text-sm block font-bold  pt-2 pb-2"
              >
                Gender
              </label>
              <Field
                name="gender"
                render={({ field, form }: FieldProps<IContact>) => (
                  <React.Fragment>
                    <select
                      name="gender"
                      className="block appearance-none w-full border rounded text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                      // {...field}
                      onChange={event => {
                        console.log(form.errors);
                        formikBag.setFieldValue(field.name, event.target.value);
                      }}
                      style={{ display: 'block' }}
                    >
                      <option value="" label="Select Gender" />
                      <option value="male" label="Male" />
                      <option value="female" label="Female" />
                    </select>
                    <span className="text-red-500 text-xs italic">
                      {form.touched.gender &&
                        form.errors.gender &&
                        form.errors.gender}
                    </span>
                  </React.Fragment>
                )}
              />
            </div>
            <div className="w-full lg:w-1/2 px-3 mb-6 md:mb-0">
              <label
                htmlFor="email"
                className="text-sm block font-bold pt-2 pb-2"
              >
                email address
              </label>
              <Field
                name="email"
                render={({ field, form }: FieldProps<IContact>) => (
                  <React.Fragment>
                    <input
                      name="email"
                      data-test="input-email"
                      className="input__textbox"
                      placeholder="Email"
                      {...field}
                    />
                    <span className="text-red-500 text-xs italic">
                      {form.touched.email &&
                        form.errors.email &&
                        form.errors.email}
                    </span>
                  </React.Fragment>
                )}
              />
            </div>
            <div className="w-full lg:w-1/1 px-3 mb-6 md:mb-0">
              <label
                htmlFor="email"
                className="text-sm block font-bold pt-2 pb-2 pm-3"
              >
                Phone Number
              </label>
              <Field
                name="phone"
                render={({ field, form }: FieldProps<IContact>) => (
                  <React.Fragment>
                    <input
                      name="phone"
                      data-test="input-phone"
                      className="input__textbox"
                      placeholder="Phone"
                      {...field}
                    />
                    <span className="text-red-500 text-xs italic">
                      {form.touched.phone &&
                        form.errors.phone &&
                        form.errors.phone}
                    </span>
                  </React.Fragment>
                )}
              />
            </div>
            <div className="w-full lg:w-1/1 px-3 mb-6 md:mb-0">
              <label
                htmlFor="address"
                className="text-sm block font-bold pt-2 pb-2"
              >
                Address
              </label>
              <Field
                name="address"
                render={({ field, form }: FieldProps<IContact>) => (
                  <React.Fragment>
                    <textarea
                      name="address"
                      data-test="input-address"
                      className="input__textbox"
                      placeholder="Address"
                      {...field}
                    />
                    <span className="text-red-500 text-xs italic">
                      {form.touched.address &&
                        form.errors.address &&
                        form.errors.address}
                    </span>
                  </React.Fragment>
                )}
              />
            </div>
            <div className="w-full lg:w-2/3 px-3 mb-6 md:mb-0">
              <label
                htmlFor="getCallback"
                className="text-sm block font-bold pt-2 pb-2"
              >
                Would like to get callback
              </label>
              <Field
                name="getCallback"
                render={({ field, form }: FieldProps<IContact>) => (
                  <React.Fragment>
                    <input
                      name="getCallback"
                      type="checkbox"
                      className="mr-2 leading-tight"
                      placeholder="getCallback"
                      {...field}
                    />
                  </React.Fragment>
                )}
              />
            </div>
            <div className="w-full lg:w-1/1 px-3 mb-6 md:mb-0">
              <button data-test='btn-add-contact'
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Create
              </button>
            </div>
          </div>
        </form>
      )}
    />
  );
};
