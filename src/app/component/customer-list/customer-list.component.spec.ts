import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Customer } from 'src/app/domain/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { CustomerListComponent } from './customer-list.component';

describe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;
  let customerService:CustomerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerListComponent ],
      providers:[CustomerService],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();

    customerService=TestBed.inject(CustomerService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe llamar el service CustomerService', () => {
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

    //Hacer llamdo fake
    const customerFake=spyOn(customerService,'findAll').and.callFake(function(){
      return of<Customer[]>(mockCustomers);
    });

    //Llama a este metodo que es el que llama el servicio findAllCustomers()
    component.ngOnInit();

    //Verifica que si se llame
    expect(customerFake).toHaveBeenCalled();
  });
  
});
