import {
  Content,
  Form,
  InputContainer,
  Input,
  Errors,
  ButtonContainer,
  Button,
  HorizontalRule,
  LinksContainer,
  Social,
  Links,
  Inputwrapper,
} from '@/styles/components/signup';
import { LoginData } from '../signin/LoginData';
import {  useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '@/utils/validation/signup';
import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { ShowModal } from '@/contexts/Modal';
import { useMessage } from '../Message';

const SignUp = () => {
  const messageApi = useMessage();
  const {setModalOpen} = useContext(ShowModal)
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  type RegisterFormInputs = {
    email: string;
    password: string;
    fullname: string;
    address: string;
    phone: string;
    confirmPassword: string;
  };

  const {
    register,
    handleSubmit,
    reset, 
    formState: { errors },
    getValues,
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(schema),
  });



  const handleRegistration = async () => {
    const formData = {
      name: getValues('fullname'),
      address: getValues('address'),
      phone: getValues('phone'),
      email: getValues('email'),
      password: getValues('password'),
    };

    try {
      setLoading(true);
      const response = await fetch(process.env.NEXT_PUBLIC_BACKENED_API + 'admin/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials:'include'
      });
      if (response.ok) {
        messageApi.success("successfully resigter");
        setModalOpen(false)
        reset(); 
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      messageApi.error(error);
    } finally {
      setLoading(false);
    }

  };

  return (
          <>
          <Content>
            <LinksContainer>
              {LoginData.map((item,index) => {
                return (
                  <Social key={index}>
                    <Links href={item.url} key={item.id}>
                      <item.Icon />
                    </Links>
                  </Social>
                );
              })}
            </LinksContainer>
            <HorizontalRule />
            <Form
             onSubmit={handleSubmit(handleRegistration)} 
             noValidate>
              <InputContainer>
                <Inputwrapper>
                  <Input type="fullname" placeholder="Full Name" 
                  {...register('fullname')}
                   />
                  <Errors>
                    {errors.fullname?.message}
                    </Errors>
                </Inputwrapper>
                <Inputwrapper>
                  <Input type="email" placeholder="Email" 
                  {...register('email')} 
                  />
                  <Errors>
                    {errors.email?.message}
                  </Errors>
                </Inputwrapper>
                <Inputwrapper>
                  <Input type="phone" placeholder="Phone" 
                  {...register('phone')} 
                  />
                  <Errors>
                    {errors.phone?.message}
                    </Errors>
                </Inputwrapper>
                <Inputwrapper>
                  <Input type="address" placeholder="Address" 
                  {...register('address')} 
                  />
                  <Errors>
                    {errors.address?.message}
                    </Errors>
                </Inputwrapper>
                <Inputwrapper>
                  <Input type="password" placeholder="password" 
                  {...register('password')} 
                  />
                  <Errors>
                    {errors.password?.message}
                    </Errors>
                </Inputwrapper>
                <Inputwrapper>
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    {...register('confirmPassword', {
                      validate: (value) => value === getValues('password') || 'Passwords do not match',
                    })}
                  />
                  <Errors>
                    {errors.confirmPassword?.message}
                    </Errors>
                </Inputwrapper>
              </InputContainer>

              <ButtonContainer>
                <Button type="submit" disabled={loading}>
                  {loading ? 'Registering...' : 'Registration'}
                </Button>
              </ButtonContainer>
            </Form>
          </Content>

          </>

  );
};

export default SignUp;
