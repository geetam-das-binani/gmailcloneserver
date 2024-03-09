import PhotoIcon from "@mui/icons-material/Photo";
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import SendIcon from '@mui/icons-material/Send';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
export const SIDEBAR_DATA = [
  {
    name: "inbox",
    title: "Inbox",
    icon: PhotoIcon ,
  },
  {
    name: "starred",
    title: "Starred",
    icon:  StarOutlineOutlinedIcon,
  },
  ,
  {
      name:'sent',
      icon:SendIcon,
      title:'Sent'
  },
  {
      name:'drafts',
      icon:InsertDriveFileOutlinedIcon,
      title:'Drafts'
  },
  {
      name:'trash',
      icon:DeleteOutlineOutlinedIcon,
      title:'Trash'
  },
  {
      name:'allmail',
      icon:MailOutlineOutlinedIcon,
      title:'All Mail'
  }
];
