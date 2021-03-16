import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'demo-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('demo-test');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span')
                   .textContent).toContain('demo-test app is running!');
  });

  it('El valor de myVar debe ser Hola Mundo',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.myVar).toEqual('Hola Mundo');
  });

  it('La variable saludo debe contener el nombre Diego',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.saludo).toContain('Diego');
  });

  it('Debe Sumar dos numeros y retornar 6',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const resultado=app.sumar(2,4);
    expect(resultado).toEqual(6);
  });

  it('Debe retornar True',()=>{
    const app = TestBed.createComponent(AppComponent).componentInstance;
    const valor=app.isPar(4);
    expect(valor).toBeTruthy();
  });

  it('Debe retornar Falso',()=>{
    const app = TestBed.createComponent(AppComponent).componentInstance;
    const valor=app.isPar(3);
    expect(valor).toBeFalsy();
  });
});
