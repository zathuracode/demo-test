import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { CustomerService } from './customer.service';
import { Customer } from '../domain/customer';

describe('CustomerService', () => {
  let service: CustomerService;
  //Simula Peticiones http
  let httpMock:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(CustomerService);
    httpMock=TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    //Verificamos que no existan solicitudes pendientes
    httpMock.verify();
  });

  it('Debe crear el service', () => {
    expect(service).toBeTruthy();
  });

  it('Debe retornar un Observable<Customer[]>',()=>{
    let mockCustomers:Customer[]=[ {
      address: "94 Hintze Drive",
      custId: 1,
      email: "hdownes0@bloomberg.com",
      enable: "Y",
      name: "Humfried Downes",
      phone: "62-(594)716-0300",
      token: null,
      dotyId_DocumentType: 3
  },
  {
      address: "5 Ridgeview Junction",
      custId: 2,
      email: "jcannell1@stanford.edu",
      enable: "Y",
      name: "Jerrie Cannell",
      phone: "46-(124)837-1565",
      token: null,
      dotyId_DocumentType: 3
  },];
    service.findAll().subscribe(customers=>{
      expect(customers.length).toBe(2);
      expect(customers).toEqual(mockCustomers);
    });
    //Comprueba que se haga una solicitud con esta URL y retorna una simulacion de Req
    const req=httpMock.expectOne(`${service.API}customer`);
    expect(req.request.method).toBe('GET'); //Validamos que sea un metodo GET
    req.flush(mockCustomers); //Asigno los valores simulados en la respuesta
  });


  it('Debe crear customer y retornar un Observable<Customer>',()=>{
    let mockCustomer:Customer= {
      address: "94 Hintze Drive",
      custId: 1,
      email: "hdownes0@bloomberg.com",
      enable: "Y",
      name: "Humfried Downes",
      phone: "62-(594)716-0300",
      token: null,
      dotyId_DocumentType: 3
  };
    service.save(mockCustomer).subscribe(customer=>{
      expect(customer).not.toBeNull(customer);
      expect(customer.name).toEqual("Humfried Downes");
    });
    //Comprueba que se haga una solicitud con esta URL y retorna una simulacion de Req
    const req=httpMock.expectOne(`${service.API}customer`);
    expect(req.request.method).toBe('POST'); //Validamos que sea un metodo POST
    req.flush(mockCustomer); //Asigno los valores simulados en la respuesta
  });



});
