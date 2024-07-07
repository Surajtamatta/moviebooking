// "use client"
import React, { useContext ,useState} from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '@/utils/validation/signin';
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
  ForgotPassword,

} from '@/styles/components/signin';
import { LoginData } from "./LoginData";
import { ShowModal } from '@/contexts/Modal';
import { useMessage } from '../Message';
interface LoginFormInputs {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const messageApi = useMessage();
  const {setModalOpen} = useContext(ShowModal)
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
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
    <Content>
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
      <Form
      onSubmit={handleSubmit(handleRegistration)} 
      >
        <InputContainer>
          <Input
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          <Errors>
            {errors.email?.message}
            </Errors>
          <Input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <Errors>
            {errors.password?.message}
        </Errors>
        </InputContainer>
        <ButtonContainer>
          <Button type="submit">Login</Button>
        </ButtonContainer>
      </Form>
      <ForgotPassword>Forgot Password ?</ForgotPassword>
  
    </Content>
  );
};

export default SignIn;
