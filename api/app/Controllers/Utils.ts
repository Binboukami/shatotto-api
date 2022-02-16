export default class ControllerUtils {

    //? Convert query params properties from Camel Case to Snake Case
    public camelToSnake(key) {
        var result = key.replace(/([A-Z])/g, " $1");
        return result.split(' ').join('_').toLowerCase();
    }
}