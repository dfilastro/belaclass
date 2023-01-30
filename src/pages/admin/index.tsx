import * as React from 'react';
import { Tabs, Tab, Box, TextField, Stack } from '@mui/material';
import { GrContact, GrDomain } from 'react-icons/gr';
import { FcAbout } from 'react-icons/fc';
import { GiTeacher } from 'react-icons/gi';
import styles from './styles.module.scss';
import { Button } from '../../components/Button';
import { useState } from 'react';

import styled from '@emotion/styled';
import { useInfo } from '../../../hooks/useInformation';

type Dashboard = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

const ColorPicker = styled.div`
  display: flex;
  gap: 4rem;
`;

const Tittle = styled.h1``;

const SubTittle = styled.h2``;

function Dashboard(props: Dashboard) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const { information } = useInfo();
  const data = {
    homeDesc1: information.homeDesc1,
    homeImg1: information.homeImg1,
    homeDesc2: information.homeDesc2,
    homeImg2: information.homeImg2,
    primaryColor: information.primaryColor,
    secondaryColor: information.secondaryColor,
    title: information.title,
    titleColor: information.titleColor,
    aboutTitle: information.aboutTitle,
    aboutDesc: information.aboutDesc,
    aboutImg1: information.aboutImg1,
    aboutProf1: information.aboutProf1,
    aboutMed1: information.aboutMed1,
    aboutImg2: information.aboutImg2,
    aboutProf2: information.aboutProf2,
    aboutMed2: information.aboutMed2,
    aboutImg3: information.aboutImg3,
    aboutProf3: information.aboutProf3,
    aboutMed3: information.aboutMed3,
  };

  const [value, setValue] = React.useState(0);
  const [info, setInfo] = useState(data);

  // useEffect(() => {
  //   setInfo(data);
  // }, [data]);
  const imgs = [] as any;

  function handleSubmit(infoData: any) {
    information.homeDesc1 = info?.homeDesc1;
    information.homeImg1 = info?.homeImg1;
    information.homeDesc2 = info?.homeDesc2;
    information.homeImg2 = info?.homeImg2;
    information.primaryColor = info?.primaryColor;
    information.secondaryColor = info?.secondaryColor;
    information.title = info?.title;
    information.titleColor = info?.titleColor;
    information.aboutTitle = info?.aboutTitle;
    information.aboutDesc = info?.aboutDesc;
    information.aboutImg1 = info?.aboutImg1;
    information.aboutProf1 = info?.aboutProf1;
    information.aboutMed1 = info?.aboutMed1;
    information.aboutImg2 = info?.aboutImg2;
    information.aboutProf2 = info?.aboutProf2;
    information.aboutMed2 = info?.aboutMed2;
    information.aboutImg3 = info?.aboutImg3;
    information.aboutProf3 = info?.aboutProf3;
    information.aboutMed3 = info?.aboutMed3;

    console.log(information.homeImg1);
    console.log(information.homeDesc1);
    console.log(infoData);
    console.log(imgs);
  }

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      info[event.target.id as keyof typeof info] = URL.createObjectURL(event.target.files[0]);
    }
  };

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleFieldChange = (e: { target: { id: string; value: string } }) => {
    setInfo((old) => ({ ...old, [e.target.id]: e.target.value }));
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{ borderBottom: 1, borderColor: 'primary', color: 'white', backgroundColor: 'primary' }}
      >
        <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
          <Tab icon={<GrDomain />} label='Início' {...a11yProps(0)} />
          <Tab icon={<FcAbout />} label='Sobre' {...a11yProps(1)} />
          <Tab icon={<GiTeacher />} label='Cursos' {...a11yProps(2)} />
          <Tab icon={<GrContact />} label='Contato' {...a11yProps(3)} />
        </Tabs>
      </Box>
      <Dashboard value={value} index={0}>
        <Stack
          component='form'
          className={styles.container}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(info);
          }}
        >
          <Tittle>Preferências Globais</Tittle>
          <ColorPicker>
            <TextField
              key={information.title}
              onChange={handleFieldChange}
              value={info.title}
              multiline
              maxRows={5}
              id='title'
              type='text'
              label='Escolha um nome para sua plataforma'
              sx={{
                width: '30%',
                color: 'red',
              }}
            />
            <Stack>
              Cor primária
              <input
                type='color'
                key={information.primaryColor}
                onChange={handleFieldChange}
                value={info.primaryColor}
                id='primaryColor'
              />
            </Stack>
            <Stack>
              Cor secundária
              <input
                type='color'
                key={information.secondaryColor}
                onChange={handleFieldChange}
                value={info.secondaryColor}
                id='secondaryColor'
              />
            </Stack>
          </ColorPicker>
          <Tittle>Imagens e Textos da Página Inicial</Tittle>
          <SubTittle>Primeira Sessão</SubTittle>
          <input
            className={styles.regularInput}
            type='file'
            onChange={onImageChange}
            id='homeImg1'
            accept='image/jpeg, image/png, image/jpg'
          />
          <Box>{information.homeDesc1}</Box>
          <TextField
            key={information.homeDesc1}
            onChange={handleFieldChange}
            value={info.homeDesc1}
            multiline
            maxRows={5}
            id='homeDesc1'
            type='text'
            label='Texto primeira imagem'
            sx={{
              width: '100%',
              color: 'red',
            }}
          />
          <SubTittle>Segunda Sessão</SubTittle>
          <input
            className={styles.regularInput}
            type='file'
            onChange={onImageChange}
            id='homeImg2'
            accept='image/jpeg, image/png, image/jpg'
          />
          <Box>{information.homeDesc2}</Box>
          <TextField
            key={information.homeDesc2}
            onChange={handleFieldChange}
            value={info.homeDesc2}
            multiline
            maxRows={5}
            id='homeDesc2'
            type='text'
            label='Texto primeira imagem'
            sx={{
              width: '100%',
              color: 'red',
            }}
          />
          <Box>
            <button type='submit'>Save Changes</button>
            {/* <Button description={'Save Changes'} type='submit' route={''} /> */}
          </Box>
        </Stack>
      </Dashboard>

      <Dashboard value={value} index={1}>
        <Stack
          component='form'
          className={styles.container}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(info);
          }}
        >
          <Tittle>Informações gerais</Tittle>
          <Box>{information.aboutTitle}</Box>
          <TextField
            key={information.aboutTitle}
            onChange={handleFieldChange}
            value={info.aboutTitle}
            multiline
            maxRows={5}
            id='aboutTitle'
            type='text'
            label='Insira um título para a página Sobre'
            sx={{
              width: '100%',
              color: 'red',
            }}
          />
          <Box>{information.aboutDesc}</Box>
          <TextField
            key={information.aboutDesc}
            onChange={handleFieldChange}
            value={info.aboutDesc}
            multiline
            maxRows={5}
            id='aboutDesc'
            type='text'
            label='Insira uma descrição para a página Sobre'
            sx={{
              width: '100%',
              color: 'red',
            }}
          />

          <Tittle>Imagens e Textos da Página Sobre</Tittle>
          <SubTittle>Profissional 1</SubTittle>
          <input
            className={styles.regularInput}
            type='file'
            onChange={onImageChange}
            id='aboutImg1'
            accept='image/jpeg, image/png, image/jpg'
          />
          <TextField
            key={information.aboutProf1}
            onChange={handleFieldChange}
            value={info.aboutProf1}
            multiline
            maxRows={5}
            id='aboutProf1'
            type='text'
            label='Insira o nome do profissional'
            sx={{
              width: '100%',
              color: 'red',
            }}
          />
          <TextField
            key={information.aboutMed1}
            onChange={handleFieldChange}
            value={info.aboutMed1}
            multiline
            maxRows={5}
            id='aboutMed1'
            type='text'
            label='Insira a mídia social do profissional'
            sx={{
              width: '100%',
              color: 'red',
            }}
          />

          <SubTittle>Profissional 2</SubTittle>
          <input
            className={styles.regularInput}
            type='file'
            onChange={onImageChange}
            id='aboutImg2'
            accept='image/jpeg, image/png, image/jpg'
          />
          <TextField
            key={information.aboutProf2}
            onChange={handleFieldChange}
            value={info.aboutProf2}
            multiline
            maxRows={5}
            id='aboutProf2'
            type='text'
            label='Insira o nome do profissional'
            sx={{
              width: '100%',
              color: 'red',
            }}
          />
          <TextField
            key={information.aboutMed2}
            onChange={handleFieldChange}
            value={info.aboutMed2}
            multiline
            maxRows={5}
            id='aboutMed2'
            type='text'
            label='Insira a mídia social do profissional'
            sx={{
              width: '100%',
              color: 'red',
            }}
          />

          <SubTittle>Profissional 3</SubTittle>
          <input
            className={styles.regularInput}
            type='file'
            onChange={onImageChange}
            id='aboutImg3'
            accept='image/jpeg, image/png, image/jpg'
          />
          <TextField
            key={information.aboutProf3}
            onChange={handleFieldChange}
            value={info.aboutProf3}
            multiline
            maxRows={5}
            id='aboutProf3'
            type='text'
            label='Insira o nome do profissional'
            sx={{
              width: '100%',
              color: 'red',
            }}
          />
          <TextField
            key={information.aboutMed3}
            onChange={handleFieldChange}
            value={info.aboutMed3}
            multiline
            maxRows={5}
            id='aboutMed3'
            type='text'
            label='Insira a mídia social do profissional'
            sx={{
              width: '100%',
              color: 'red',
            }}
          />

          <Box>
            <button type='submit'>Save Changes</button>
          </Box>
        </Stack>
      </Dashboard>

      <Dashboard value={value} index={2}>
        <input type='file' accept='video/mp4,video/x-m4v,video/*' />
      </Dashboard>

      <Dashboard value={value} index={3}>
        Contato
      </Dashboard>
    </Box>
  );
}
