import { Row } from "react-bootstrap";
import Col from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Navbar from "./Navbar";
const over={'overflow': 'auto','height': '100vh'}
const iconBsPC={'display':'none','color':'white'}
const bgg={'color':'white'}
const Client=()=>{
    return(
        <div className="  bg-white">
            <div className="d-flex">
                <div className=" p-1 w-100" style={over} >
                        <Row className=" m-auto" >
                            <Navbar name=" Client" iconBsP={iconBsPC} />
                        </Row>
                        <Row className="  m-auto mt-3 bg-light text-dark">
                            <div>
                                <div className=" p-1 w-100 " style={over} >
                                <Row className="  m-auto mt-3  ">
                                <div className="p-2 ">
                                <Table responsive="md">
                                    <thead>
                                        <tr className="bg-secondary" style={bgg}>
                                            <th >Nom de Plat </th>
                                            <th >Quantié</th>
                                            <th >Prix</th>
                                            <th >Status</th>
                                            <th >Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                          
                                        </tr>
                                    </tbody>
                                </Table>
                                </div>
                                </Row>
                                </div>
                            </div>
                        </Row>
                </div>
            </div>
       </div>
      
    )
}
export default Client
