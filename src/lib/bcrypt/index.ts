import * as bcrypt from 'bcrypt';

export const hashPassword = ( password: string ) => {
    return bcrypt.hashSync( password, 5 );
};

export const comparePassword = ( password: string, hashedPassword: string ) => {
    return bcrypt.compareSync( password, hashedPassword );
};
