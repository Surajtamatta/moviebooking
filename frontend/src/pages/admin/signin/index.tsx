
import React, { useContext } from 'react';
import { MainContainer, Wrapper, Content, WelcomeText, Form, InputContainer, Input, Errors, ButtonContainer, Button, TextContent, Text, LoginWith, HorizontalRule, LinksContainer, Social, Links, ForgotPassword } from '@/styles/components/signin';
import { LoginData } from "./LoginData";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from '@/utils/validation/signin';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BackButton } from '@/styles/components/signup';
import { useMessage } from '@/components/Message';
import { ShowModal } from '@/contexts/Modal';
import { Space } from 'antd';

const Login = () => {

  type LoginFormInputs = {
    email: string;
    password: string;
  };

 
  // const {  setLoginState } = useLogin();
  const router = useRouter();
  const messageApi = useMessage();
  const {setModalOpen} = useContext(ShowModal)
  const {
    register,
    handleSubmit,
    reset, 
    formState: { errors },
    getValues,
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  })
  
  const handleRegistration = async () => {
    const formData = {
      email: getValues('email'),
      password: getValues('password'),
    };

    try {

      const response = await fetch(process.env.NEXT_PUBLIC_BACKENED_API + 'admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials:'include'
      });
      if (response.ok) {
        messageApi.success("successfully login");
        setModalOpen(false)
        router.push('/admin')
        reset(); 
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      messageApi.error(error);
    } finally {

    }

  };

  return (

      <MainContainer>
         <Space>
         <Link href={'/'}>
         <BackButton type="submit">Back</BackButton>
         </Link>
        <Wrapper>
          <Content>
            <WelcomeText>Login Page</WelcomeText>
            <LinksContainer>
              {LoginData.map((item) => {
                return (
                  <Social key={item.id}>
                    <Links href={item.url}>
                      <item.Icon />
                      {item.text}
                    </Links>
                  </Social>
                );
              })}
            </LinksContainer>
            <HorizontalRule />
            <Form onSubmit={handleSubmit(handleRegistration)} noValidate>
              <InputContainer>
                <Input type="email" placeholder="Email" {...register("email")} />
                <Errors>{errors.email?.message}</Errors>
                <Input type="password" placeholder="Password" {...register("password", { required: true })} />
                <Errors>{errors.password?.message}</Errors>
              </InputContainer>
              <ButtonContainer>
                <Button type="submit">Login</Button>
              </ButtonContainer>
            </Form>
            <ForgotPassword>Forgot Password ?</ForgotPassword>
            <HorizontalRule />
            <TextContent>
              <Text> Don&apos;t have an account? </Text>
              <Link href={'/admin/signup'}>
                <LoginWith>Sign Up</LoginWith>
              </Link>
            </TextContent>
          </Content>
        </Wrapper>
         </Space>
      </MainContainer>
  
  );
}

export default Login;
