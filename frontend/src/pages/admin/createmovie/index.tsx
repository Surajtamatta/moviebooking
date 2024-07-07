import React, { useState } from 'react';
import { Form, Input, Button, Select, Upload, Rate, message, Space } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Option } = Select;

const movieGenres = [
  'Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 
  'Documentary', 'Drama', 'Family', 'Fantasy', 'Film-Noir', 'History', 
  'Horror', 'Musical', 'Mystery', 'Romance', 'Sci-Fi', 'Sport', 'Thriller', 
  'War', 'Western', 'Fantasy', 'Science Fiction', 'Romantic Comedy', 
  'Psychological Thriller', 'Period Drama', 'Crime Thriller', 'Teen', 
  'Superhero', 'Spy', 'Epic', 'Heist', 'Survival', 'Paranormal', 'Dark Comedy', 
  'Satire', 'Steampunk', 'Post-Apocalyptic', 'Coming-of-Age', 'Other'
];

interface Movie {
  title: string;
  description: string;
  portraitUrl: string;
  portraitImg: File | null;
  landscapeUrl: string;
  landscapeImg: File | null;
  rating: number;
  genre: string[];
  duration: number;
}

const MovieForm: React.FC = () => {
  const [form] = Form.useForm();
  const [portraitImg, setPortraitImg] = useState<File | null>(null);
  const [landscapeImg, setLandscapeImg] = useState<File | null>(null);
  const [portraitLoading, setPortraitLoading] = useState(false);
  const [landscapeLoading, setLandscapeLoading] = useState(false);

  const onFinish = async (values: any) => {
    const movie: Movie = {
      ...values,
      portraitImg: portraitImg,
      landscapeImg: landscapeImg,
    };

    // Submit the movie data to the backend API
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/addmovie`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
      });

      const data = await response.json();
      if (data.ok) {
        message.success('Movie added successfully');
      } else {
        message.error(data.message || 'Failed to add movie');
      }
    } catch (error) {
      message.error('Failed to add movie');
      console.error(error);
    }
  };

  const handleUpload = async (info: any, setImageUrl: (url: string) => void, setLoading: (loading: boolean) => void) => {
    const file = info.file.originFileObj;
    const formData = new FormData();
    formData.append('myimage', file); 
  
    setLoading(true);
  
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/movie/image/uploadimage`, {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
      if (data.ok) {
        setImageUrl(data.imageUrl);
        message.success('Image uploaded successfully');
      } else {
        message.error(data.message || 'Failed to upload image');
      }
    } catch (error) {
      message.error('Failed to upload image');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const props = {
    action: `${process.env.NEXT_PUBLIC_BACKEND_API}/image/uploadimage`,
    name: 'myimage',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info: any) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        console.log(info)
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{ rating: 0, genre: [] }}
    >
      <Space
        style={{
          width: '100%',
          justifyContent: 'center',
          gap: 24,
        }}
      >
        <Space
          style={{
            justifyContent: 'center',
            gap: 24,
            background: 'white',
            padding: 24,
            borderRadius: 10,
          }}
        >
          <Space direction="vertical" style={{ width: 340, justifyContent: 'flex-start' }}>
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: 'Please input the title!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true, message: 'Please input the description!' }]}
            >
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item
              name="portraitUrl"
              label="Portrait URL"
              rules={[{ required: true, message: 'Please upload the portrait image!' }]}
            >
              <Input disabled />
            </Form.Item>

            <Form.Item
              name="landscapeUrl"
              label="Landscape URL"
              rules={[{ required: true, message: 'Please upload the landscape image!' }]}
            >
              <Input disabled />
            </Form.Item>

            <Form.Item
              name="genre"
              label="Genre"
              rules={[{ required: true, message: 'Please select at least one genre!' }]}
            >
              <Select mode="multiple" allowClear>
                {movieGenres.map((genre) => (
                  <Option key={genre} value={genre}>
                    {genre}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Space>

          <Space direction="vertical" style={{ width: 350, justifyContent: 'flex-start' }}>
            <Form.Item
              name="rating"
              label="Rating"
              rules={[{ required: true, message: 'Please input the rating!' }]}
            >
              <Rate count={10} />
            </Form.Item>

            <Form.Item
              name="duration"
              label="Duration (minutes)"
              rules={[{ required: true, message: 'Please input the duration!' }]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item label="Portrait Image">
            <Upload {...props} 
              // onChange={(response) => { 
              //   if (response.file.status !== 'uploading') { 
              //     console.log(response.file, response.fileList); 
              //   } 
              //   if (response.file.status === 'done') { 
              //     message.success(`${response.file.name}  
              //                     file uploaded successfully`); 
              //   } else if (response.file.status === 'error') { 
              //     message.error(`${response.file.name}  
              //                   file upload failed.`); 
              //   } 
              // }} 
            > 
          <Button>Upload File</Button> 
        </Upload> 
        </Form.Item>

        <Form.Item label="Landscape Image">
          <Upload
            name="myimage" // Use 'myimage' as the name for the Upload component
            listType="picture"
            beforeUpload={() => false}
            onChange={(info) => handleUpload(info, (url) => form.setFieldsValue({ landscapeUrl: url }), setLandscapeLoading)}
            showUploadList={false}
          >
            <Button icon={<UploadOutlined />} loading={landscapeLoading}>
              Upload
            </Button>
          </Upload>
        </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Space>
        </Space>
      </Space>
    </Form>
  );
};

export default MovieForm;
