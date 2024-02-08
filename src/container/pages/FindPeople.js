import React, {useState} from 'react'; 
import { Button,Dropdown,Menu,Modal,Input,Select,Checkbox,Form, } from 'antd';
import { CheckOutlined,CloseOutlined,PlusCircleOutlined,ThunderboltOutlined,UpOutlined,
 DownOutlined,LinkOutlined,PlusSquareOutlined,UserDeleteOutlined,InfoCircleOutlined} from '@ant-design/icons'; 
 import { Link } from 'react-router-dom';
 import { UserinfoBox,Modalcntbox,NamelistBox,Notebox,DropdownBox,FormBox} from './style';


function People() {
 
 
 const [follow, setFollow] = useState(false);
 const [open, setOpen] = useState(false);
 const [openadd, setOpenadd] = useState(false);
 const [opencreate, setopencreate] = useState(false);
 const [Toggle, setToggle] = useState(false);
 const [Toggledropdown, setToggledropdown] = useState(true);

 const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];
 
 const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const showModaladd = () => {
    setOpenadd(true);
  };
  const handleOkadd = () => {
    setOpenadd(false);
  };

  const handleCanceladd = () => {
    setOpenadd(false);
  };

  const showModalcreate = () => {
    setopencreate(true);
  };
  const handlecreate = () => {
    setopencreate(false);
  };

  const handleCancelcreate = () => {
    setopencreate(false);
  };
  const followfriend = ()=>{
    setFollow(true);
    showModaladd();
 }  

 const dropdownClassName = 'followdropdown';

 const handleChange = (value) => {
  console.log(`Selected: ${value}`);
};

 

 const menunew = (
    <Menu >
      <Menu.Item key="1" onClick={showModaladd}><PlusSquareOutlined /> Add/Remove from list</Menu.Item>
      <Menu.Item key="2"> <LinkOutlined /> Copy profile URL</Menu.Item>
      <Menu.Item key="3" onClick={showModal} className='danger'><UserDeleteOutlined /> Unfollow </Menu.Item>
    </Menu>
  );
  return (
    <>
   <div className='cntpagecomponent'>
              <div className='centersidebarcontent flexcolumn'>
                <div className='analyticsBox '>                  
                    <ul className='listItemsbox'>
                      <li>
                        <UserinfoBox className='peopleInfo'>
                            <div className='headbpx'>
                                  <div className='imgmaindiv'>
                                    <div className='imgdiv'>
                                      <img src={require('../../static/images/img_userpic.jpg')} alt=''/>                            
                                    </div>
                                    <span className='greentickicon'><img src={require('../../static/images/icon_check.png')} alt=''/></span>
                                    </div>
                                    <div className='rightbtns'>
                                        {
                                            !follow &&
                                            <Button className='btnfollow' onClick={followfriend}>
                                                Follow
                                            </Button>
                                        }
                                        {
                                            follow &&
                                            <Dropdown menu={menunew} trigger={['click']}  
                                            overlayClassName={dropdownClassName}
                                            >
                                                <Button className="ant-dropdown-link" size="small">
                                                    Following <DownOutlined />
                                                </Button>
                                            </Dropdown>
                                        }
                                      
                                    </div>
                                </div>
                                <div className='namedetails'>
                                  <h6 className="profilename">
                                      Vishal Kumar
                                      <span>Full Stack Developer</span>
                                  </h6>
                                 
                                </div>
                        </UserinfoBox>                      
                      </li>
                      <li>
                      <UserinfoBox className='peopleInfo'>
                            <div className='headbpx'>
                                  <div className='imgmaindiv'>
                                    <div className='imgdiv'>
                                      <img src={require('../../static/images/img_userpic.jpg')} alt=''/>                            
                                    </div>
                                    <span className='greentickicon'><img src={require('../../static/images/icon_check.png')} alt=''/></span>
                                    </div>
                                    <div className='rightbtns'>
                                        {
                                            !follow &&
                                            <Button className='btnfollow' onClick={followfriend}>
                                                Follow
                                            </Button>
                                        }
                                        {
                                            follow &&
                                            <Dropdown menu={menunew} trigger={['click']}  
                                            overlayClassName={dropdownClassName}
                                            >
                                                <Button className="ant-dropdown-link" size="small">
                                                    Following <DownOutlined />
                                                </Button>
                                            </Dropdown>
                                        }
                                      
                                    </div>
                                </div>
                                <div className='namedetails'>
                                  <h6 className="profilename">
                                      Vishal Kumar
                                      <span>Full Stack Developer</span>
                                  </h6>
                                 
                                </div>
                        </UserinfoBox>                      
                      </li>
                   
                    </ul>
                  </div>
                 
              
              </div>          
              <div className='rightsidebarcntbox'>  
                <div className='rightsidecntbox scrollbox'>
                  <div className='analyticsBox mt-0'>
                       <h5 className='subtitlebox'> 
                        <span><Link to="">Filter by </Link></span> 
                      </h5>
                      <FormBox>
                      <Form> 
                        <Form.Item>
                          <DropdownBox>
                            <span className='labeltext'>Profile tags</span>
                            <Select
                                mode="tags" // Enable tag mode
                                style={{ width: '100%' }}
                                placeholder="Search skills,tools,roles"
                                onChange={handleChange}
                                options={options}
                                />  
                          </DropdownBox>
                          <div className='CheckBoxItem'>
                          <Checkbox>
                              Match with All about tags
                          </Checkbox>
                          </div>
                        </Form.Item>
                         
                        <Form.Item>
                          <div className='twoColumn'>
                            <DropdownBox className='colbox'>
                              <span className='labeltext'>Country</span>
                              <Select
                                  mode="tags" // Enable tag mode
                                  style={{ width: '100%' }}
                                  placeholder="Select"
                                  onChange={handleChange}
                                  options={options}
                                  />  
                            </DropdownBox>
                            <DropdownBox className='colbox'>
                              <span className='labeltext'>City</span>
                              <Select
                                  mode="tags" // Enable tag mode
                                  style={{ width: '100%' }}
                                  placeholder="Select"
                                  onChange={handleChange}
                                  options={options}
                                  />  
                            </DropdownBox>
                          </div>
                        </Form.Item>
                        <Form.Item>
                          <DropdownBox>
                              <span className='labeltext'>Role(s)</span>
                              <Select
                                  mode="tags" // Enable tag mode
                                  style={{ width: '100%' }}
                                  placeholder="Up to 3"
                                  onChange={handleChange}
                                  options={options}
                                  />  
                            </DropdownBox>
                        </Form.Item>
                        <Form.Item>
                          <DropdownBox>
                              <span className='labeltext'>Company</span>
                              <Select
                                  mode="tags" // Enable tag mode
                                  style={{ width: '100%' }}
                                  placeholder="Up to 5"
                                  onChange={handleChange}
                                  options={options}
                                  />  
                            </DropdownBox>
                        </Form.Item>
                        <div className='AdvanceFilter '>
                          <Button className='colapseHeader' onClick={()=>setToggledropdown(!Toggledropdown)}>
                            <h5><span className='filterhead'><ThunderboltOutlined /> Advance Filter</span>
                            {Toggledropdown? <UpOutlined /> : <DownOutlined />}
                             
                             </h5>
                            <span className='notebox'>Upgrade to Peerlist Plus for advanced filtering.</span>
                          </Button>
                          <div className={Toggledropdown?'collapseBox show':'collapseBox'} >
                              <Form.Item>
                              <DropdownBox className='disabled'>
                                  <span className='labeltext'>Match with this job post</span>
                                  <Select
                                      mode="tags" // Enable tag mode
                                      style={{ width: '100%' }}
                                      placeholder="Select"
                                      onChange={handleChange}
                                      options={options}
                                      disabled
                                      />  
                                </DropdownBox>
                            </Form.Item>
                            <Form.Item>
                          <div className='twoColumn'>
                            <DropdownBox className='colbox disabled'>
                              <span className='labeltext'>Min Experience</span>
                              <Select
                                  mode="tags" // Enable tag mode
                                  style={{ width: '100%' }}
                                  placeholder="Year(s)"
                                  onChange={handleChange}
                                  options={options}
                                  disabled
                                  />  
                            </DropdownBox>
                            <DropdownBox className='colbox disabled'>
                              <span className='labeltext'>Max Experience</span>
                              <Select
                                  mode="tags" // Enable tag mode
                                  style={{ width: '100%' }}
                                  placeholder="Year(s)"
                                  onChange={handleChange}
                                  options={options}
                                  disabled
                                  />  
                            </DropdownBox>
                          </div>
                        </Form.Item>
                        <Form.Item>
                          <div className='formBtnarea'>
                              <Button className='btn btnClear disabled'>
                                  Clear
                              </Button>
                              <Button className='btn btnblack btnApply disabled'>
                                  Apply
                              </Button>
                          </div>
                        </Form.Item>
                            
                          </div>
                          
                        </div>
                      </Form>
                      </FormBox>
                      
                  </div>
                </div>
              </div>                
            </div>  
          <Modal
              open={open}        
              onOk={handleOk} 
              onCancel={handleCancel}
              width={400}
              className='confirmmodal'
              footer={[
                <Button key="back" onClick={handleCancel}>
                Cancel
                </Button>,
                <Button key="submit" className='ant-btn-primary' onClick={handleOk}>
                  Yes, unfollow
                </Button>,
                
              ]}
            >
              <Modalcntbox>
              <InfoCircleOutlined />
                <p>Are you sure you want to unfollow Kamal?</p>
              <span>It will remove them from all the lists as well.</span>
              </Modalcntbox>
        
      </Modal>



      <Modal
              open={openadd}        
              onOk={handleOkadd} 
              onCancel={handleCanceladd}
              width={400}
              className='confirmmodal'
              footer={[
                <Button key="back" onClick={showModalcreate}>
                    <PlusSquareOutlined />  New List
                </Button>,
                <Button key="submit" className='ant-btn-primary' onClick={handleOkadd}>
                 <CheckOutlined /> Add to List
                </Button>,
                
              ]}
            >
              <Modalcntbox>
                  <div className={Toggle?"addlistbox activepic":"addlistbox"}>
                      <div className='usernamebox'>
                        <span>a</span>  
                      </div>
                      <div className='faviconbox'>
                          <img src={require('../../static/images/faviconpng.png')} alt=''/>
                      </div>
                      <div className='otheruserbox'>
                          <img src={require('../../static/images/otheruser.jpg')} alt=''/>
                      </div>
                  </div>
                  <p>Add Kamal to your peer&apos;s list!</p> 
                  <div className='btnareabox'>
                      <Button className={Toggle?'btnFriends activebtn':'btnFriends'}  onClick={() => setToggle(!Toggle)} >Friends {Toggle? <CloseOutlined /> : <PlusCircleOutlined />}</Button>
                  </div>
              </Modalcntbox>
        
      </Modal>
        


      <Modal
              open={opencreate}        
              onOk={handleCancelcreate}  
              onCancel={handleCancelcreate}
              title="Create New List"
              width={400}
              className='confirmmodal flexend'
              footer={[                
                <Button key="submit" className='ant-btn-primary' onClick={handlecreate}>
                  <PlusSquareOutlined/>   Create a List
                </Button>,
                
              ]}
            >
              <Modalcntbox>
                <NamelistBox>
                      <span className='labeltext'>Name your list</span>
                      <Input />
                      
                </NamelistBox>
                <Notebox>
                Ex: Frontend Engineers, Investors, Good content writers, etc.
                </Notebox>
                
              </Modalcntbox>
        
      </Modal>
           
    </>
  );
}


export default People;
