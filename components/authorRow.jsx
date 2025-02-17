import axios from 'axios'
import {useSession} from 'next-auth/react'
import Link from 'next/link'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
  } from "@chakra-ui/react";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDisclosure } from '@chakra-ui/react'



export const AuthorRow = ({element,handleDelete,multipleDelete,setMultipleDelete,selectAll})=>{


    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleChange=()=>{

        if(multipleDelete.includes(element.id)){
            setMultipleDelete(multipleDelete.filter((e)=>{
            return e!==element.id
            }))
        }

        else{

        setMultipleDelete([...multipleDelete,element.id])}

    }
    




    return(
            <div className="flex   flex-row h-[60px] items-center justify-between  border-b  px-2 font-poppins space-x-2">
                <div  className="w-[20px]">
               
                <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Delete</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    Hello
                    </ModalBody>
                    
                    <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                 Close
                </Button>
              <Button colorScheme='red'  onClick={()=>{handleDelete(element.id)}}>Delete</Button>
                </ModalFooter>
                </ModalContent>
                </Modal>
        



               {selectAll?<input className="w-[20px] h-[20px]" type='checkbox' checked />:                  
                    <input className="w-[20px] h-[20px]" type='checkbox' onChange={handleChange} /> }             
                   
                    </div>
                
              
                
                <div className="w-[200px]  flex space-x-3 justify-start">
                {element.photo?<img src={`${element.photo}`} alt="." className="rounded-full w-[20px] h-[20px]"/>:<AccountCircleIcon/>}
                <p>{element.name.length>30?element.name.slice(0,30)+'...':element.name}</p>
                </div>
                
                <div className="w-[250px]">
                    <h4>{element.email.length>30?element.name.slice(0,30)+'...':element.email}</h4>
                </div>
   
                
                <div className="w-[230px] ">
                <h4>{element?.specialization}</h4>
            </div>

                <div className="w-[120px] ">
                    <h4 className='w-[60px]'>
                    {element?.articles.length}
                    </h4>
                </div>
                
            
                
                <div className="w-[100px] flex space-x-4" >

                <Link href={`/admin/dashboard/authors/edit/${element.id}`}>
                <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="#394867" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z" stroke="#394867" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
                </button>
                </Link>



                    <button className='stroke-primary' onClick={onOpen}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6H5H21"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 11V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14 11V17"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </button>
 
                </div>
            
        </div>)

    }