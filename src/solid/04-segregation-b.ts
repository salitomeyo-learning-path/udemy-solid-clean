interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): void;
}

interface RunningBird {
    run(): void;
}

interface SwimmingBird {
    swim(): void;
}


class Canary implements Bird, FlyingBird {
    public fly() {}
    public eat() {}
}

class Chicken implements Bird, RunningBird, SwimmingBird {
    public eat() {}
    public run() {}
    public swim() {}
}

class Penguin implements Bird, SwimmingBird {
    public eat() {}
    public swim() {}
}