import { SnakeViewBase, minProperty, maxProperty, valuesProperty } from './snakeview.common';

declare var com: any;
export class SnakeView extends SnakeViewBase {
    nativeView: any;
    minValue: number;
    maxValue: number;
    values: any[];

    createNativeView(): Object {
        const snakeView = new com.txusballesteros.SnakeView((<any>this)._context);
        snakeView.setMinValue(0);
        snakeView.setMaxValue(100);

        return snakeView;
    }

    initNativeView(): void {
        // Attach the owner to nativeView.
        // When nativeView is tapped we get the owning JS object through this field.
        (<any>this.nativeView).owner = this;
        super.initNativeView();
    }

    disposeNativeView(): void {
        // Remove reference from native view to this instance.
        (<any>this.nativeView).owner = null;

        // If you want to recycle nativeView and have modified the nativeView
        // without using Property or CssProperty (e.g. outside our property system - 'setNative' callbacks)
        // you have to reset it to its initial state here.
        super.disposeNativeView();
    }

    // transfer JS text value to nativeView.
    [minProperty.setNative](value: string) {
        this.minValue = parseInt(value);
        this.nativeView.setMinValue(this.minValue);
    }

    [minProperty.getDefault](): number {
        return this.minValue;
    }

    // transfer JS text value to nativeView.
    [maxProperty.setNative](value: string) {
        this.maxValue = parseInt(value);
        this.nativeView.setMaxValue(this.maxValue);
    }

    [maxProperty.getDefault](): number {
        return this.maxValue;
    }

    // transfer JS text value to nativeView.
    [valuesProperty.setNative](value: any[]) {
        console.log(value);
        this.nativeView.setMaximumNumberOfValues(value.length ||  0);
        this.nativeView.clear();
        value.forEach((val) => {
            this.nativeView.addValue(val);
        })
        debugger;
    }

    [valuesProperty.getDefault](): any[] {
        return this.values;
    }
}
