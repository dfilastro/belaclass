import { createContext, useContext, useState } from 'react';

interface InfoContextProps {
  information: {
    homeDesc1: string;
    homeImg1: string;
    homeDesc2: string;
    homeImg2: string;
    primaryColor: string;
    secondaryColor: string;
    title: string;
    titleColor: string;

    aboutTitle: string;
    aboutDesc: string;
    aboutImg1: string;
    aboutProf1: string;
    aboutImg2: string;
    aboutMed1: string;
    aboutProf2: string;
    aboutMed2: string;
    aboutImg3: string;
    aboutProf3: string;
    aboutMed3: string;
    coursesTitle1: string;
    coursesSubtitle1: string;
    coursesUrl1: string;
    coursesTitle2: string;
    coursesSubtitle2: string;
    coursesUrl2: string;
  };
  addInfo: (product: string) => void;
}

const InfoContext = createContext<InfoContextProps>({
  information: {
    homeDesc1: '',
    homeImg1: '',
    homeDesc2: '',
    homeImg2: '',
    primaryColor: '',
    secondaryColor: '',
    title: '',
    titleColor: '',
    aboutTitle: '',
    aboutDesc: '',
    aboutImg1: '',
    aboutProf1: '',
    aboutImg2: '',
    aboutMed1: '',
    aboutProf2: '',
    aboutMed2: '',
    aboutImg3: '',
    aboutProf3: '',
    aboutMed3: '',
    coursesTitle1: '',
    coursesSubtitle1: '',
    coursesUrl1: '',
    coursesTitle2: '',
    coursesSubtitle2: '',
    coursesUrl2: '',
  },
  addInfo: () => {},
});

export const useInfo = () => useContext(InfoContext);

export const InfoContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [information, setInformation] = useState<any>({
    homeDesc1:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illo officiis earum quidem aperiam assumenda ad sit commodi rerum. Commodi explicabo molestias at voluptatem vel earum dicta maiores harum dolorum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quaerat laboriosam rerum suscipit consequatur temporibus laborum similique iure? Maiores deserunt earum similique. Alias at nemo asperiores illum quasi reprehenderit eum! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti architecto quaerat quisquam eos cumque deleniti magnam, facere atque, ea voluptas blanditiis eligendi incidunt! Inventore ex qui iusto ipsum vitae sint!',
    homeImg1: '/automaquiagem.jpg',
    homeDesc2:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At cupiditate hic adipisci placeat numquam porro veritatis cumque perferendis repellat quisquam doloribus error reprehenderit, quas in molestias, recusandae nisi minima modi.',
    homeImg2: '/cabelereiro.jpg',
    primaryColor: 'var(--lilac-800)',
    secondaryColor: 'var(--lilac-200)',
    title: 'Bellaclass',
    titleColor: 'var(--black)',
    aboutTitle: 'Somos um time de profissionais renomados',
    aboutDesc:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis perferendis in dolore repudiandae qui voluptate fugiat odio vitae consequuntur, assumenda rem deserunt sunt saepe consequatur! Voluptatibus molestias laborum aliquam quae.',
    aboutImg1: '/professional1.jpg',
    aboutProf1: 'John Doe',
    aboutMed1: '@johndoe',
    aboutImg2: '/professional2.jpg',
    aboutProf2: 'Jane Doe',
    aboutMed2: '@janedoe',
    aboutImg3: '/professional3.jpg',
    aboutProf3: 'Jonny Doe',
    aboutMed3: '@jonnydoe',
    coursesTitle1: 'Curso de maquiagem',
    coursesSubtitle1: 'Curso completo para você se tornar uma maquiadora profissional',
    coursesUrl1: 'https://www.youtube.com/watch?v=_WSnFKivKhY',
    coursesTitle2: 'Automaquiagem Para Iniciantes',
    coursesSubtitle2: 'Curso perfeito para você iniciar sua carreira como maquiadora',
    coursesUrl2: 'https://www.youtube.com/watch?v=ATZDEbpq3jA',
  });

  const addInfo = (product: string) => {
    setInformation([...information, product]);
  };

  return (
    <InfoContext.Provider
      value={{
        information,
        addInfo,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};
