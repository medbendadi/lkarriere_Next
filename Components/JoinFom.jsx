"use client";
import React, { useEffect } from 'react'

// Assets
import bg_en from '../public/images/Assets/IMG SVG/Section Form/Men SVG 1 Eng.svg'
import bg_ar from '../public/images/Assets/IMG SVG/Section Form/Men SVG 1 Arabic.svg'
import done_en from '../public/images/Assets/IMG SVG/Section Form/Men SVG 2 Done Eng.svg'
import done_ar from '../public/images/Assets/IMG SVG/Section Form/Men SVG 2 Done Arabic.svg'
import dev from '../public/images/Assets/IMG SVG/Section Form/Development icon.svg'
import dev_light from '../public/images/Assets/IMG SVG/Section Form/resize/Development icon Light.svg'
import design from '../public/images/Assets/IMG SVG/Section Form/Design Icon.svg'
import design_light from '../public/images/Assets/IMG SVG/Section Form/Design Icon Light.svg'
import marketing from '../public/images/Assets/IMG SVG/Section Form/Marketing icon.svg'
import marketing_light from '../public/images/Assets/IMG SVG/Section Form/resize/Marketing icon Light.svg'
import check from '../public/images/Assets/Icones/Icones Section Infos/check_Light.svg'

import { useState } from 'react'
import { Close, ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import { Button, Col, Form, Input, Row, Select } from 'antd'
import { Option } from 'antd/es/mentions';
import TextArea from 'antd/es/input/TextArea'
import { Alert, Snackbar } from '@mui/material'
import { useRouter } from 'next/router'
import Image from 'next/image'



const camps = [
   {
     "id": "marketing",
      "name": {
         en: "DIGITAL MARKETING",
         fr: "MARKETING DIGITALE",
         ar: "التسويق الرقمي",
      },
    "light_icon": marketing_light,
      "dark_icon": marketing,
  },
   {
    "id": "dev",
    "name":{
      en: "WEB DEVELOPMENT",
      fr: "DEVELOPPEMENT WEB",
      ar: "تطوير المواقع",
   },
    "light_icon": dev_light,
      "dark_icon": dev,
  },
   {
    "id": "design",
    "name": {
      en: "GRAPHIC DESIGN",
      fr: "DESIGN GRAPHIQUE ",
      ar: "التصميم الجرافيكي",
   },
    "light_icon": design_light,
    "dark_icon": design,
  }
]



const JoinFom = ({ onClose, type, translation }) => {
   const router = useRouter()
  const  lang  = router.query.lang || 'en';
   const isRTL = lang === 'ar' || lang === 'ma';
   
  const [step, setStep] = useState(1)
  const [camp, setCamp] = useState('')
const [PersonnelData, setPersonnelData] = useState({})
   const [ProfessionalData, setProfessionalData] = useState({})
   
   const [sent, setSent] = useState(false)
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

   useEffect(() => {
      if (type) {
         setCamp(type)
      } else {
         setCamp('marketing')
      }
   }, [])

  const steps = {
    1: Step1,
    2: Step2,
    3: Step3,
    4: Done
   }

    const Step = steps[step]
   function onNext() {
         setStep(prevent => prevent + 1)
  }
  function onPrevious() {
    setStep(prevent => prevent - 1)
   }
   function onFinish(values) {
      try {
         if (values.Scoliare && PersonnelData && camp) {
            const formData = { ...values, ...PersonnelData, CampType: camp || type}
            
      
            fetch('https://script.google.com/macros/s/AKfycbzkh5XWHdJ7NcNpMuPVXyh-nuPU6vmQp1A52-P5zRb_M8t2IaSOKzAsZyR9UU8mZ7j7/exec',
               {
                  mode: 'no-cors',
                  method: 'POST',
                  body: JSON.stringify(formData),
                  "contentType": "application/json",
               }).then(() => {
                  onNext()
               }).catch(err => {
                  setErrorMessage({message: "Check You Connection And Try Again!"})
                  setIsError(true)
               })
         }else {
            throw new Error('All Field Are Required')
        }
      }catch(err) {
         setErrorMessage(err)
      setIsError(true)
      }
   }
   const [active, setActive] = useState(0)
  const handleActive = (item) => {
    setActive(item)
    setCamp(camps[item]?.id)
   }
  return (
    <div className={`fixed left-0 right-0 top-0 bottom-0 z-[9999] flex items-center justify-center ${lang == 'ar' ? 'ar' : ''}`} style={{ background: 'linear-gradient(59deg, rgba(83, 88, 166, 0.3) 0%, rgba(141, 88, 164, 0.3) 100%)' }}>
      <div className='md:w-[70%] md:max-h-[95%] md:h-[80%] h-full w-full max-h-[100%] rounded-0 md:rounded-[50px] overflow-hidden relative md:py-[3.5rem] py-[6.5rem]' style={{ background: "rgb(230 230 230)", boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )' }}>
        <div className={`absolute p-2 top-[40px] ${lang == 'ar' ? 'left-[40px] ar' : 'right-[40px]'} purple-gradient-to-dark rounded-xl cursor-pointer`} onClick={onClose}>
          <Close htmlColor='#fff'/>
        </div>
        {
          step == 1 ? (<Step type={type} onNext={onNext} translation={translation} active={active} handleActive={(e) => handleActive(e)}></Step>) :
                 (<Step translation={translation} onClose={onClose} onNext={onNext} onPrevious={onPrevious} setProfessionalData={(e) => setProfessionalData(e)} onFinish={onFinish} ProfessionalData={ProfessionalData} PersonnelData={PersonnelData} setPersonnelData={(e) => setPersonnelData(e)} activeCamp={camp}></Step>)

        }
        </div>
        <Snackbar open={sent} autoHideDuration={6000} onClose={() => setSent(false)} anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>
                <Alert onClose={() => setSent(false)} severity="success" sx={{ width: '100%' }}>
                    Your Message Sent Successfully!
                </Alert>
            </Snackbar>

          
          <Snackbar open={isError} autoHideDuration={6000} onClose={() => setIsError(false)} anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>
            <Alert onClose={() => setIsError(false)} severity="error" sx={{ width: '100%' }}>
                {errorMessage.message}
            </Alert>
        </Snackbar>
    </div>
  )
}


const Step1 = ({ handleActive, active, type, onNext, translation }) => {
   const router = useRouter()
  const  lang  = router.query.lang || 'en';
const isRTL = lang === 'ar' || lang === 'ma';
   
   useEffect(() => {
      if (type) {
         onNext()
      }
   }, [])
  return (
     <>
        <div className={`h-full absolute ${lang == 'ar' ? 'right-0' : 'left-0'} hidden md:block bottom-[-10px] w-fit pointer-events-none`}>
      <Image src={lang == 'ar' ? bg_ar :bg_en} alt="" loading='lazy' />
      </div>
      <p className={`absolute text-center ${lang == 'en' ? 'md:left-[30%] left-[-50%] w-full md:text-left' : lang == 'fr' ? 'left-[25%] md:text-left': 'right-[50%] md:text-right'} md:w-fit top-[65px] translate-x-[50%] md:mt-0 mt-[60px] md:text-3xl text-4xl text-[#5358A6]`}>{translation?.title1}<br /> {translation?.title2} <span className='font-bold'>{translation?.span}</span></p>
      <div className='flex items-center w-full h-full row'>
        <div className="md:w-[50%] w-0 h-full"></div>
        <div className="md:w-[50%] w-full h-full flex flex-col mt-[56px] items-center justify-center ">
          {
            camps.map((camp, index) => (
               <div key={index} className={`flex items-center md:w-[377px] w-[90%] px-4 py-2 justify-between bg-white rounded-l-2xl rounded-r-[60px] cursor-pointer mb-[20px] row ${active === index ? 'activeCamp' : ''}`} onClick={() => handleActive(index)}>
                  <div className={`w-[50px] h-[50px] mr-3 mr relative ${lang == 'ar' ? 'scale-x-[-1]' : ''}`}>
                <Image fill src={active === index ? camp.light_icon : camp.dark_icon} alt="" loading='lazy' />
                  </div>
                <p className={`uppercase border-l-2 border-solid border-[#5358A6] font-bold py-1 text-xl text-[#5358A6] ${lang != 'ar' ? 'px-5' : index == 2 ? 'text-right pl-5' : index == 0 ? 'text-right pl-[2.25rem]' : 'text-right pl-[3.75rem]'}`}>{lang == 'en' ? camp.name.en : lang == 'fr' ? camp.name.fr : camp.name.ar }</p>
                <div className={`w-[30px] h-[30px] rounded-full border-solid border-[#FBBC67] border-2  flex items-center justify-center bg-[#fff] ${active === index && 'border-none'}`}>
                  {
                    active === index && (<div className='w-[15px] h-[15px] yellow-gradient-to-light rounded-full'></div>)
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className={`flex ${lang == 'ar' ? 'md:justify-start' : 'md:justify-end'} justify-center items-center md:px-[5.25rem] px-[20px] py-[4rem] md:py-4 absolute bottom-0 w-full`}>
              <div className="flex items-center text-[#fff] w-[200px] justify-center rounded-3xl p-3 purple-gradient-to-dark font-bold uppercase  cursor-pointer text-xl row" onClick={onNext}
              >
                       <p className='mr mr-2 '>{translation?.next}</p>
                       {
                          lang == 'ar' ? (
                             <ArrowBackIos fontSize='small'/>
                          
                          ) : (
                             <ArrowForwardIos fontSize='small'/>
                          )
                       }
              </div>
            </div>
    </>
  )
}

const Step2 = ({ setPersonnelData, onPrevious, onNext, PersonnelData, translation }) => {
   const [form] = Form.useForm()
   const router = useRouter()
  const  lang  = router.query.lang || 'en';
   const isRTL = lang === 'ar' || lang === 'ma';
   const fromButton = React.useRef()

   const submit = () => {
               fromButton.current.click()
   }
   const onSubmit = (values) => {
      setPersonnelData(values)
      onNext()
   }
   const errorsObj = {
      fr: {
         fname: 'Veuillez indiquer votre prénom',
         lname: 'Veuillez indiquer votre nom de famille',
         email: 'Veuillez indiquer votre email',
         age: "L'âge doit être entre 17 et 55 ans",
         phone: 'Veuillez indiquer votre numéro de téléphone',
         city: 'Veuillez indiquer votre ville',
         function: 'Veuillez indiquer votre fonction'
      },
      ar: {
         fname: 'من فضلك قم بتوفير اسمك',
         lname: 'من فضلك قم بتوفير نسبك',
         email: 'من فضلك قم بتوفير ايميل',
         age: 'يجب أن يكون العمر بين 17 و 55 سنة',
         phone: 'من فضلك قم بتوفير رقم الهاتف',
         city: 'من فضلك قم بتوفير المدينة',
         function: 'من فضلك قم بتوفير وظيفة'
      },
      en: {
         fname: 'Please provide your first name',
         lname: 'Please provide your last name',
         email: 'Please provide an email',
         age: 'The age should be between 17 and 55',
         phone: 'Please provide your phone number',
         city: 'Please provide a city',
         function: 'Please provide a function'
      }
   }
   const errors = lang == 'fr' ? errorsObj.fr : lang == 'ar' ? errorsObj.ar : errorsObj.en
 return (
    <>
       <Form onFinish={onSubmit} form={form} className='md:px-[5.25rem] px-[20px]'
       initialValues={PersonnelData && PersonnelData}
       >
          <Row gutter={{xs: 8, sm: 16 , md: 24}}>
             <Col span={12} >
                <Form.Item
                   labelCol={{ span: 24 }}
                   wrapperCol={{ span: 24 }}

                   style={{ width: '100%', marginBottom: "20px" }}
                   name='Fname'
                   label={translation?.f_name}
                   rules={[
                      {
                         required: true,
                         message: errors.fname
                      },
                   ]}

                >
                   <Input className='py-3 rounded-full'/>
                </Form.Item>
             </Col>
             <Col span={12}>
                <Form.Item
                   labelCol={{ span: 24 }}
                   wrapperCol={{ span: 24 }}
                   style={{ width: '100%', marginBottom: "20px" }}
                   name='Lname'
                   className='w-full'
                   label={translation?.l_name}
                   rules={[
                      {
                         required: true,
                         message: errors.lname
                      },
                   ]}
                >
                   <Input className='py-3 rounded-full'/>
                </Form.Item>
             </Col>
          </Row>
          <Row gutter={{xs: 8, sm: 16 , md: 24}}>
             <Col span={12}>
                <Form.Item
                   labelCol={{ span: 24 }}
                   wrapperCol={{ span: 24 }}
                   style={{ width: '100%', marginBottom: "20px" }}
                   name='Age'
                   label={translation?.age}
                   rules={[
                      {
                         required: true,
                         message: errors.age,
                      },
                   ]}
                >
                   <Input type='number' min={18} max={50} className='py-3 rounded-full'/>
                </Form.Item>

             </Col>
             <Col span={12}>
                <Form.Item
                   labelCol={{ span: 24 }}
                   style={{ width: '100%', marginBottom: "20px" }}
                   name='Email'
                   label={translation?.email}
                   rules={[
                      {
                         type: 'email',
                         required: true,
                         message: errors.email
                      },
                   ]}
                >
                   <Input className='py-3 rounded-full'/>
                </Form.Item>
             </Col>
          </Row>
          <Row gutter={{xs: 8, sm: 16 , md: 24}}>
             <Col span={12}>
                <Form.Item
                   labelCol={{ span: 24 }}
                   wrapperCol={{ span: 24 }}
                   name='Phone'
                   label={translation?.phone}
                   style={{ width: '100%', marginBottom: "20px" }}
                   rules={[
                      {
                         required: true,
                         message: errors.phone
                      },
                   ]}
                >
                   <Input type='number' className='py-3 rounded-full'/>
                </Form.Item>
             </Col>
             <Col span={12}>
                <Form.Item
                   labelCol={{ span: 24 }}
                   style={{ width: '100%', marginBottom: "20px" }}
                   name='City'
                   label={translation?.city}
                   rules={[
                      {
                         required: true,
                         message: errors.city
                      },
                   ]}
                >
                   <Input className='py-3 rounded-full'/>
                </Form.Item>
             </Col>
          </Row>
          <Row>
             <Form.Item
                labelCol={{ span: 24 }}
                style={{ width: '100%' }}
                name='Function'
                label={translation?.function}

                rules={[
                   {
                      required: true,
                      message: errors.function
                  },
                ]}
             >
                <Input className='py-3 rounded-full'/>
             </Form.Item>
          </Row>
<Button type='primary' htmlType='submit' className='opacity-0' ref={fromButton}></Button>

       </Form>
       <div className="flex justify-between md:space-x-0 space-x-11 items-center md:px-[5.25rem] px-[20px] md:py-4 py-[4rem] absolute bottom-0 w-full row">
              <div className="flex items-center text-[#fff] w-[200px] justify-center rounded-3xl p-3 yellow-gradient-to-dark font-bold uppercase cursor-pointer text-xl row" onClick={onPrevious}>
                {
                          lang == 'ar' ? (
                             <ArrowForwardIos fontSize='small'/>
                             
                             ) : (
                             <ArrowBackIos fontSize='small'/>
                          )
                       }

                {
                  <p className='mr mr-2'>{translation?.previous}</p>
                }
              </div>
              <div className="flex items-center text-[#fff] w-[200px] justify-center rounded-3xl p-3 purple-gradient-to-dark font-bold uppercase cursor-pointer text-xl row" onClick={submit}
              >
               <p  className='mr mr-2'>{translation?.next}</p>
                {
                          lang == 'ar' ? (
                             <ArrowBackIos fontSize='small'/>
                          
                          ) : (
                             <ArrowForwardIos fontSize='small'/>
                          )
                       }

              </div>

            </div>
    </>

 )
}

const Step3 = ({ activeCamp, onFinish, onPrevious, setProfessionalData, ProfessionalData, translation }) => {
   const [form] = Form.useForm()
   const router = useRouter()
  const  lang  = router.query.lang || 'en';
   const isRTL = lang === 'ar' || lang === 'ma';
   const fromButton = React.useRef()

   const submit = () => {
      fromButton.current.click()
   }
   const onSubmit = (values) => {
      setProfessionalData({})
      setProfessionalData(values)

      onFinish(values)
   }


 return (
    <>
       <Form layout="horizontal" className='md:px-[5.5rem] px-4' onFinish={onSubmit} form={form}
          initialValues={ProfessionalData && ProfessionalData}
       >
          
          {
             activeCamp === 'dev' ? (<DevForm translation={translation}/>) : activeCamp === 'marketing' ? (<MarketingForm translation={translation} />) : ((<DesignFrom translation={translation} />))
          }

<Button type='primary' htmlType='submit' className='opacity-0' ref={fromButton}></Button>

       </Form>
       <div className="flex justify-between md:space-x-0 space-x-11 items-center md:px-[5.25rem] px-[20px] md:py-4 py-[4rem] absolute bottom-0 w-full row">
              <div className="flex items-center text-[#fff] w-[200px] justify-center rounded-3xl p-3 yellow-gradient-to-dark font-bold uppercase cursor-pointer text-xl row" onClick={onPrevious}>
                {
                          lang == 'ar' ? (
                             <ArrowForwardIos fontSize='small'/>
                             
                             ) : (
                             <ArrowBackIos fontSize='small'/>
                          )
                       }

                {
                  <p className='mr mr-2'>{translation?.previous}</p>
                }
              </div>
              <div className="flex items-center text-[#fff] w-[200px] justify-center rounded-3xl p-3 purple-gradient-to-dark font-bold uppercase cursor-pointer text-xl row" onClick={submit}
              >
                <p  className='mr mr-2'>{translation?.submit}</p>
                {
                          lang == 'ar' ? (
                             <ArrowBackIos fontSize='small'/>
                          
                          ) : (
                             <ArrowForwardIos fontSize='small'/>
                          )
                       }

              </div>

            </div>
    </>
 )
}


const DevForm = ({ handleChange, translation }) => {
   const router = useRouter()
  const  lang  = router.query.lang || 'en';
   const isRTL = lang === 'ar' || lang === 'ma';
   
   const RTL = {
      fr: {
         scolaire: {
            title: "Niveau Scoliare",
            options: [
               {
                  label: 'ASC',
                  value: 'asc'
               },
               {
                  label: 'Niveau Bac',
                  value: 'niveau bac'
               },
               {
                  label: 'Bac',
                  value: 'bac'
               },
               {
                  label: 'Bac +2',
                  value: 'bac +2'
               },
               {
                  label: 'Bac +3',
                  value: 'bac +3'
               },
               {
                  label: 'Bac +4',
                  value: 'bac +4'
               },
               {
                  label: 'Bac +5',
                  value: 'bac +5'
               },
            ]
         },
         select1: {
            title: "Niveau de Programation",
            option: [
               {
                  label: "Débutant",
                  value: "debutant"
               },
               {
                  label: "Avancé",
                  value: "avance"
               },
               {
                  label: "Professionnel",
                  value: "professionnel"
               }
            ]
         },
         select2: {
            title: "Quels sont les langages de programmation que vous maîtriser ?",
            option: [
               {
                  value: "html",
                  label: "HTML"
               },
                  {
                     value: "javascript",
                     label: "JavaScript"
                  },
                  {
                  value: "css",
                  label: "CSS"
               },
                  {
                  value: "php",
                  label: "PHP"
               },
                  {
                  value: "React",
                  label: "React"
               },
            ]
         },
         textarea: {
            title: 'Why do you want to learn IT development ?'
         }
      },
      ar: {
         scolaire: {
            title: "المستوى المدرسي",
            options: [
               {
                  value: 'ASC',
                  label: 'الثالث اعدادي'
               },
               {
                  value: 'Niveau Bac',
                  label: 'الثاني الثانوي'
               },
               {
                  value: 'Bac',
                  label: 'باك'
               },
               {
                  value: 'Bac +2',
                  label: 'باك +2'
               },
               {
                  value: 'Bac +3',
                  label: 'باك +3'
               },
               {
                  value: 'Bac +4',
                  label: 'باك +4'
               },
               {
                  value: 'Bac +5',
                  label: 'باك +5'
               },
            ]
         },
         select1: {
            title: "مستواك في البرمجة",
            option: [
               {
                  value: "debutant",
                  label: "مبتدئ"
               },
                  {
                     value: "avance",
                     label: "متقدم"
                  },
                  {
                  value: "professionnel",
                  label: "محترف"
               },
            ]
         },
         select2: {
            title: "ما هي لغات البرمجة التي تتقنها؟",
            option: [
               {
                  value: "html",
                  label: "HTML"
               },
                  {
                     value: "javascript",
                     label: "JavaScript"
                  },
                  {
                  value: "css",
                  label: "CSS"
               },
                  {
                  value: "php",
                  label: "PHP"
               },
                  {
                  value: "React",
                  label: "React"
               },
            ]
         },
         textarea: {
            title: 'لماذا تريد أن تتعلم تطوير تكنولوجيا المعلومات؟'
         }
      },
      en: {
         scolaire: {
            title: "Educational Level",
            options: [
               {
                  value: 'asc',
                  label: 'ASC'
               },
               {
                  value: 'niveau bac',
                  label: 'Niveau Bac'
               },
               {
                  value: 'bac',
                  label: 'Bac'
               },
               {
                  value: 'bac +2',
                  label: 'Bac +2'
               },
               {
                  value: 'bac +3',
                  label: 'Bac +3'
               },
               {
                  value: 'bac +4',
                  label: 'bac +4'
               },
               {
                  value: 'bac +5',
                  label: 'Bac +5'
               },
            ]
         },
         select1: {
            title: "Programming Level",
            option: [
               {
                  label: "Beginner",
                  value: "debutant"
               },
               {
                  label: "Advanced",
                  value: "avance"
               },
               {
                  label: "Professional",
                  value: "professionnel"
               }
            ]
         },
         select2: {
            title: "What programming languages do you master?",
            option: [
               {
                  value: "html",
                  label: "HTML"
               },
                  {
                     value: "javascript",
                     label: "JavaScript"
                  },
                  {
                  value: "css",
                  label: "CSS"
               },
                  {
                  value: "php",
                  label: "PHP"
               },
                  {
                  value: "React",
                  label: "React"
               },
            ]
         },
         textarea: {
            title: 'Why do you want to learn IT development?'
         }
      },
   }
   const data = lang == 'fr' ? RTL.fr : lang == 'ar' ? RTL.ar : RTL.en

   return (
      <>
         <Row>
             <Form.Item
                labelCol={{ span: 24 }}
                style={{ width: '100%', marginBottom: "15px" }}
               label={data.scolaire.title}
                name='Scoliare'
            >
               
                <Select
                   dropdownStyle={{ zIndex: 99999 }}
                   onChange={handleChange}
             style={{ width: '100%' }}
               >
                  {
                     data.scolaire.options.map((item, index) => (
                        <Option key={index} value={item.value}>{item.label}</Option>
                     ))
                  }
                </Select>
             </Form.Item>
          </Row>
          <Row>
             <Form.Item
                labelCol={{ span: 24 }}
                style={{ width: '100%', marginBottom: "15px" }}
                name='Programation'
                label={data.select1.title}>
           <Select
                   dropdownStyle={{ zIndex: 99999 }}
                   onChange={handleChange}
               >
                  {
                     data.select1.option.map((item, index) => (
                        <Option key={index} value={item.value}>{item.label}</Option>
                     ))
                  }
                </Select>
             </Form.Item>
          </Row>

          <Row>
             <Form.Item
                labelCol={{ span: 24 }}
                style={{ width: '100%', marginBottom: "15px" }}
               label={data.select2.title}
               name='Languages'
         className='last'>
           <Select
                   dropdownStyle={{ zIndex: 99999 }}
                   onChange={handleChange}
                   mode='multiple'
               >
                  {
                     data.select2.option.map((item, index) => (
                        <Option key={index} value={item.value}>{item.label}</Option>
                     ))
                  }
                </Select>
             </Form.Item>
          </Row>
          <div />
          <Row>
             <Form.Item
                labelCol={{ span: 24 }}
                style={{ width: '100%' }}
               label={data.textarea.title}
                name='Pourquoi'
            >
               
                <TextArea rows={4} className='p-2 rounded-3xl'/>
             </Form.Item>
          </Row>
      </>

   )
}

const MarketingForm = ({ handleChange,translation }) => {
   const router = useRouter()
   const  lang  = router.query.lang || 'en';
    const isRTL = lang === 'ar' || lang === 'ma';

   const RTL = {
      fr: {
         scolaire: {
            title: "Niveau Scoliare",
            options: [
               {
                  label: 'ASC',
                  value: 'asc'
               },
               {
                  label: 'Niveau Bac',
                  value: 'niveau bac'
               },
               {
                  label: 'Bac',
                  value: 'bac'
               },
               {
                  label: 'Bac +2',
                  value: 'bac +2'
               },
               {
                  label: 'Bac +3',
                  value: 'bac +3'
               },
               {
                  label: 'Bac +4',
                  value: 'bac +4'
               },
               {
                  label: 'Bac +5',
                  value: 'bac +5'
               },
            ]
         },
         select1: {
            title: "Avez-vous déjà pratiqué le commerce ?",
            option: [
               {
                  label: "Oui",
                  value: "oui"
               },
               {
                  label: "Non",
                  value: "non"
               }
            ]
         },
         textarea1: {
            title: 'Avez-vous déjà pratiqué le e-commerce ? Si oui, quel bénéfice avez-vous réalisé ?'
         },
         textarea2: {
            title: 'Pourquoi souhaitez-vous apprendre le e-commerce ?'
         }
      },
      ar: {
         scolaire: {
            title: "المستوى المدرسي",
            options: [
               {
                  value: 'ASC',
                  label: 'الثالث اعدادي'
               },
               {
                  value: 'Niveau Bac',
                  label: 'الثاني الثانوي'
               },
               {
                  value: 'Bac',
                  label: 'باك'
               },
               {
                  value: 'Bac +2',
                  label: 'باك +2'
               },
               {
                  value: 'Bac +3',
                  label: 'باك +3'
               },
               {
                  value: 'Bac +4',
                  label: 'باك +4'
               },
               {
                  value: 'Bac +5',
                  label: 'باك +5'
               },
            ]
         },
         select1: {
            title: "هل سبق لك أن مارست التجارة",
            option: [
               {
                  value: "yes",
                  label: "نعم"
               },
               {
                  value: "non",
                  label: "لا"
               }
            ]
         },
         textarea1: {
            title: 'هل مارست التجارة الإلكترونية بالفعل؟ إذا كان الأمر كذلك، ما الربح الذي حققته؟'
         },
         textarea2: {
            title: 'لماذا تريد أن تتعلم التجارة الإلكترونية؟'
         }
      },
      en: {
         scolaire: {
            title: "Educational Level",
            options: [
               {
                  value: 'asc',
                  label: 'ASC'
               },
               {
                  value: 'niveau bac',
                  label: 'Niveau Bac'
               },
               {
                  value: 'bac',
                  label: 'Bac'
               },
               {
                  value: 'bac +2',
                  label: 'Bac +2'
               },
               {
                  value: 'bac +3',
                  label: 'Bac +3'
               },
               {
                  value: 'bac +4',
                  label: 'bac +4'
               },
               {
                  value: 'bac +5',
                  label: 'Bac +5'
               },
            ]
         },
         select1: {
            title: "Have you ever practiced trading (commerce)?",
            option: [
               {
                  value: "yes",
                  label: "Yes"
               },
               {
                  value: "no",
                  label: "No"
               }
            ]
         },
         textarea1: {
            title: 'Have you already practiced e-commerce? If so, what profit did you make?'
         },
         textarea2: {
            title: 'Why do you want to learn e-commerce?'
         }
      },
   }
   let data =[]
   if (lang == 'fr') {
      data = RTL.fr
   } else if(lang == 'en'){
      data = RTL.en
   } else {
      data = RTL.ar
   }
   return (
      <>
         <Row>
             <Form.Item
                labelCol={{ span: 24 }}
                style={{ width: '100%', marginBottom: "15px" }}
               label={data.scolaire.title}
               name="Scoliare"
            >
                <Select
                   dropdownStyle={{ zIndex: 99999 }}
                   onChange={handleChange}
             style={{ width: '100%' }}
               >
                  {
                     data.scolaire.options.map((item, index) => (
                        <Option key={index} value={item.value}>{item.label}</Option>
                        ))
                  }
                </Select>
             </Form.Item>
          </Row>
          <Row>
             <Form.Item
                labelCol={{ span: 24 }}
                style={{ width: '100%', marginBottom: "15px" }}
               label={data.select1.title}
               name="Pratique"
            >
           <Select
                   dropdownStyle={{ zIndex: 99999 }}
                   onChange={handleChange}
               >
                  {
                     data.select1.option.map((item, index) => (
                        <Option value={item.value}>{item.label}</Option>
                     ))
                  }
                </Select>
             </Form.Item>
          </Row>

          <Row>
             <Form.Item
                labelCol={{ span: 24 }}
                style={{ width: '100%', marginBottom: "15px" }}
               label={data.textarea1.title}
               name="Texteara1"

               >
               <TextArea rows={2} className='p-2 rounded-3xl'/>
             </Form.Item>
          </Row>
          <div />
          <Row>
             <Form.Item
                labelCol={{ span: 24 }}
                style={{ width: '100%' }}
               label={data.textarea2.title}
               name="Texteara2"
            >
                <TextArea rows={4} className='p-2 rounded-3xl'/>
             </Form.Item>
          </Row>
      </>
)
}

const DesignFrom = ({ handleChange, translation }) => {
   const router = useRouter()
  const  lang  = router.query.lang || 'en';
   const isRTL = lang === 'ar' || lang === 'ma';

   const RTL = {
      fr: {
         scolaire: {
            title: "Niveau Scoliare",
            options: [
               {
                  label: 'ASC',
                  value: 'asc'
               },
               {
                  label: 'Niveau Bac',
                  value: 'niveau bac'
               },
               {
                  label: 'Bac',
                  value: 'bac'
               },
               {
                  label: 'Bac +2',
                  value: 'bac +2'
               },
               {
                  label: 'Bac +3',
                  value: 'bac +3'
               },
               {
                  label: 'Bac +4',
                  value: 'bac +4'
               },
               {
                  label: 'Bac +5',
                  value: 'bac +5'
               },
            ]
         },
         select1: {
            title: "Niveau de Design",
            option: [
               {
                  label: "Débutant",
                  value: "debutant"
               },
               {
                  label: "Avancé",
                  value: "avance"
               },
               {
                  label: "Professionnel",
                  value: "professionnel"
               }
            ]
         },
         
         select2: {
            title: "Quels sont les logiciels que vous maitriser ?",
            option: [
               {
                  label: "Adobe Photoshop",
                  value: "Adobe Photoshop"
               },
               {
                  label: "Sketch",
                  value: "Sketch"
               },
               {
                  label: "Adobe Illustrator",
                  value: "Adobe Illustrator"
               },
               {
                  label: "Lunacy",
                  value: "Lunacy"
               },
               {
                  label: "Adobe InDesign",
                  value: "Adobe InDesign"
               },
               {
                  label: "Canva",
                  value: "Canva"
               }
            ]
         },
         textarea: {
            title: 'Pourquoi souhaitez-vous apprendre le design graphique ?'
         }
      },
      ar: {
         scolaire: {
            title: "المستوى المدرسي",
            options: [
               {
                  value: 'ASC',
                  label: 'الثالث اعدادي'
               },
               {
                  value: 'Niveau Bac',
                  label: 'الثاني الثانوي'
               },
               {
                  value: 'Bac',
                  label: 'باك'
               },
               {
                  value: 'Bac +2',
                  label: 'باك +2'
               },
               {
                  value: 'Bac +3',
                  label: 'باك +3'
               },
               {
                  value: 'Bac +4',
                  label: 'باك +4'
               },
               {
                  value: 'Bac +5',
                  label: 'باك +5'
               },
            ]
         },
         select1: {
            title: "مستواك في التصميم",
            option: [
               {
                  value: "debutant",
                  label: "مبتدئ"
               },
                  {
                     value: "avance",
                     label: "متقدم"
                  },
                  {
                  value: "professionnel",
                  label: "محترف"
               },
            ]
         },
         
         select2: {
            title: "ما هي البرامج التي تتقنها؟",
            option: [
               {
                  label: "Adobe Photoshop",
                  value: "Adobe Photoshop"
               },
               {
                  label: "Sketch",
                  value: "Sketch"
               },
               {
                  label: "Adobe Illustrator",
                  value: "Adobe Illustrator"
               },
               {
                  label: "Lunacy",
                  value: "Lunacy"
               },
               {
                  label: "Adobe InDesign",
                  value: "Adobe InDesign"
               },
               {
                  label: "Canva",
                  value: "Canva"
               }
            ]
         },
         textarea: {
            title: 'لماذا تريد أن تتعلم التصميم الجرافيكي؟'
         }
      },
      en: {
         scolaire: {
            title: "Educational Level",
            options: [
               {
                  value: 'asc',
                  label: 'ASC'
               },
               {
                  value: 'niveau bac',
                  label: 'Niveau Bac'
               },
               {
                  value: 'bac',
                  label: 'Bac'
               },
               {
                  value: 'bac +2',
                  label: 'Bac +2'
               },
               {
                  value: 'bac +3',
                  label: 'Bac +3'
               },
               {
                  value: 'bac +4',
                  label: 'bac +4'
               },
               {
                  value: 'bac +5',
                  label: 'Bac +5'
               },
            ]
         },
         select1: {
            title: "Designing Level",
            option: [
               {
                  label: "Beginner",
                  value: "debutant"
               },
               {
                  label: "Advanced",
                  value: "avance"
               },
               {
                  label: "Professional",
                  value: "professionnel"
               }
            ]
         },
         select2: {
            title: "What softwares do you master?",
            option: [
               {
                  label: "Adobe Photoshop",
                  value: "Adobe Photoshop"
               },
               {
                  label: "Sketch",
                  value: "Sketch"
               },
               {
                  label: "Adobe Illustrator",
                  value: "Adobe Illustrator"
               },
               {
                  label: "Lunacy",
                  value: "Lunacy"
               },
               {
                  label: "Adobe InDesign",
                  value: "Adobe InDesign"
               },
               {
                  label: "Canva",
                  value: "Canva"
               }
            ]
         },
         
         textarea: {
            title: 'Why do you want to learn graphic design?'
         }
      },
   }
   let data =[]
   if (lang == 'fr') {
      data = RTL.fr
   } else if(lang == 'en'){
      data = RTL.en
   } else {
      data = RTL.ar
   }
   return (
      <>
         <Row>
             <Form.Item
                labelCol={{ span: 24 }}
                style={{ width: '100%', marginBottom: "15px" }}
               label={data.scolaire.title}
               name='Scoliare'
            >
                <Select
                   dropdownStyle={{ zIndex: 99999 }}
                   onChange={handleChange}
             style={{ width: '100%' }}
                >
                   {
                     data.scolaire.options.map((item, index) => (
                        <Option key={index} value={item.value}>{item.label}</Option>
                     ))
                  }
                </Select>
             </Form.Item>
          </Row>
          <Row>
             <Form.Item
                labelCol={{ span: 24 }}
                style={{ width: '100%', marginBottom: "15px" }}
               label={data.select1.title}
            name='Design'
            >
           <Select
                   dropdownStyle={{ zIndex: 99999 }}
                   onChange={handleChange}
                >
                  {
                     data.select1.option.map((item, index) => (
                        <Option key={index} value={item.value}>{item.label}</Option>
                     ))
                  }
                </Select>
             </Form.Item>
          </Row>

          <Row>
             <Form.Item
                labelCol={{ span: 24 }}
                style={{ width: '100%', marginBottom: "15px" }}
               label={data.select2.title}
               name='logiciels'
         className='last'>
           <Select
                   dropdownStyle={{ zIndex: 99999 }}
                   onChange={handleChange}
                   mode='multiple'
                >
                   {
                     data.select2.option.map((item, index) => (
                        <Option key={index} value={item.value}>{item.label}</Option>
                     ))
                  }
                </Select>
             </Form.Item>
          </Row>
          <div />
          <Row>
             <Form.Item
                labelCol={{ span: 24 }}
                style={{ width: '100%' }}
               label={data.textarea.title}
               name='Pourquoi'
            >
                <TextArea rows={4} className='p-2 rounded-3xl'/>
             </Form.Item>
          </Row>
      </>
   )
}
const Done = ({onClose, translation}) => {
   const router = useRouter()
  const  lang  = router.query.lang || 'en';
   const isRTL = lang === 'ar' || lang === 'ma';
   

   return (
      <>
         <div className={`h-full absolute ${lang == 'ar' ? 'right-0' : 'left-0'} hidden md:block bottom-[-10px] w-fit pointer-events-none`}>
         <Image fill src={lang == 'ar' ? done_ar : done_en} alt="" loading='lazy' />
         </div>
      <p className={`absolute ${lang == 'en' ? 'left-[28%] top-[91px] text-3xl' :  lang == 'fr' ? 'left-[26%] top-[91px] text-2xl' : 'right-[46%] top-[85px] text-3xl'}  translate-x-[50%] text-[#5358A6] capitalize`}>{translation?.done_title}<span className='font-bold'>{translation?.done_span}</span></p>

      <div className='flex items-center w-full h-full row'>
        <div className="md:w-[50%] w-0 h-full"></div>
            <div className="md:w-[50%] w-full h-full flex flex-col mt-[56px] items-center justify-center ">
               <div className='checkIconCircle flex items-center justify-center w-[170px] h-[170px] rounded-full z-[99] yellow-gradient-to-dark after:bg-[#FBBC67] after:content-[""] after:w-[200px] after:h-[200px] after:z-[-1] after:opacity-40 after:rounded-full relative after:absolute'>
                  <div className='w-[120px] h-[100px] relative'>
                  <Image fill src={check} alt="" loading='lazy' />
                  </div>
               </div>
               <div className='flex flex-col justify-center items-center mt-10 text-center text-[#5358A6]'>
                  <h1 className='text-2xl leading-[1.2] mb-3'>{translation?.done_content[0]}<br /><span className='font-bold'>{translation?.done_content[1]}</span></h1>
                  <h3 className='text-xl leading-[1.2]'>{translation?.done_content[2]}<br />{translation?.done_content[3]}</h3>
                  <button className='purple-gradient-to-dark flex items-center text-[#fff] w-[200px] justify-center rounded-3xl p-3 font-bold uppercase cursor-pointer text-xl mt-8' onClick={onClose}>
                  {translation?.done}
                  </button>
               </div>
        </div>
        </div>
      </>
   )
}
export default JoinFom