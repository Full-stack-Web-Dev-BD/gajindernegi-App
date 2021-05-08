import React from 'react'
import {
  Row,
  Card,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import IntlMessages from '../../../../helpers/IntlMessages';
const UploadPage = () => {
    return (
        <div>
        <Card className="auth-card">  
          <div className="form-side">
            <div className="row">
                <div className="col-md-6">
                    <CardTitle className="mb-4 ">
                        <IntlMessages id="Preview " />
                    </CardTitle>                    
                    <hr/>
                    <div className="text-center mt-4">
                        <span style={{fontSize:'100px',cursor:'pointer'}} onClick={()=>document.getElementById('fileuploadinput').click()} className="iconsminds-cursor-select glyph-icon"></span>
                        <h5 className=" text-center">Tap to upload</h5>
                        <input type="file" style={{display:'none'}} id="fileuploadinput" />
                    </div>
                </div>
                <div className="col-md-6">                    
                    <CardTitle className="mb-4 ">
                        <IntlMessages id="Upload Media " />
                    </CardTitle>  
                    <hr/>
                    <form onSubmit={e=>{onUserRegister(e)}}>  
                    <FormGroup className="form-group has-float-label  mb-4">
                        <Label>
                        <IntlMessages id="Title " />
                        </Label>
                        <Input     required type="Title"  placeholder="Title" />
                    </FormGroup>  
                    
                    {/* <FormGroup className="form-group has-float-label  mb-4">
                        <Label>
                        <IntlMessages id="Add Asset Type " />
                        </Label>
                        <input type="checkbox" value="asdf"/>
                    </FormGroup> */}

                    <FormGroup className="form-group has-float-label  mb-4">
                        <Label>
                        <IntlMessages id="Add Asset Type " />
                        </Label>
                        <Input     required type="Add Asset Type"  placeholder="Add Asset Type" />
                    </FormGroup>
                    
                    <FormGroup className="form-group has-float-label  mb-4">
                        <Label>
                        <IntlMessages id="Add Usage Right " />
                        </Label>
                        <Input     required type="Add Usage Right"  placeholder="Add Usage Right" />
                    </FormGroup>
                    
                    <FormGroup className="form-group has-float-label  mb-4">
                        <Label>
                        <IntlMessages id="Add Goal " />
                        </Label>
                        <Input     required type="Add Goal"  placeholder="Add Goal" />
                    </FormGroup>
                    
                    <FormGroup className="form-group has-float-label  mb-4">
                        <Label>
                        <IntlMessages id="Description " />
                        </Label>
                        <textarea className="form-control" ro="3"     required type="Description"  placeholder="Description" />
                    </FormGroup>  
                    <div className="">
                        <a
                        className="btn btn-outline-primary btn-sm ml-2"
                        target="_top"
                        href="/app/asset-manager"
                        >
                        <span className="simple-icon-cloud-upload glyph-icon"></span>
                            <IntlMessages id="  Upload Media " />
                        </a>
                    </div> 
                    </form>
                </div>
            </div>
          </div>
        </Card>
        </div>
    )
}

export default UploadPage
