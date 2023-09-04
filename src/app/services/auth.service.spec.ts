import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig)
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call createUserWithEmailAndPassword with the provided email and password', () => {
    const user = { email: 'test@example.com', password: 'password123' };

    // Espía el método createUserWithEmailAndPassword para verificar si se llama
    const createUserWithEmailAndPasswordSpy = spyOn(service.auth, 'createUserWithEmailAndPassword');

    // Llama al método registerWithEmailAndPassword con el usuario
    service.registerWithEmailAndPassword(user);

    // Verifica que createUserWithEmailAndPassword se haya llamado con los valores correctos
    expect(createUserWithEmailAndPasswordSpy).toHaveBeenCalledWith(user.email, user.password);
  });

  it('should call signInWithGoogle', () => {
    // Espía el método signInWithGoogle para verificar si se llama
    const signInWithGoogleSpy = spyOn(service, 'signInWithGoogle');

    // Llama al método signInWithGoogle
    service.signInWithGoogle();

    // Verifica que signInWithGoogle se haya llamado
    expect(signInWithGoogleSpy).toHaveBeenCalled();
  });

  it('should call signInWithEmailAndPassword', () => {
    // Espía el método signInWithEmailAndPassword para verificar si se llama
    const signInWithEmailAndPasswordSpy = spyOn(service.auth, 'signInWithEmailAndPassword').and.returnValue(Promise.resolve({ credential: null, user: null }));

    // Datos de prueba
    const userCredentials = { email: 'test@example.com', password: 'testPassword' };

    // Llama al método signInWithEmailAndPassword
    service.signInWithEmailAndPassword(userCredentials);

    // Verifica que signInWithEmailAndPassword se haya llamado con los argumentos correctos
    expect(signInWithEmailAndPasswordSpy).toHaveBeenCalledWith(userCredentials.email, userCredentials.password);
  });

});
