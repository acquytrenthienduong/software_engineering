import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

// Model
class CounterModel {
  int counter = 0;

  void increment() {
    counter++;
  }
}

// ViewModel
class CounterViewModel extends ChangeNotifier {
  final CounterModel _model = CounterModel();

  int get counter => _model.counter;

  void incrementCounter() {
    _model.increment();
    notifyListeners(); // Notify the view to update
  }
}

// View
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: ChangeNotifierProvider(
        create: (_) => CounterViewModel(),
        child: CounterView(),
      ),
    );
  }
}

class CounterView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final counterViewModel = Provider.of<CounterViewModel>(context);

    return Scaffold(
      appBar: AppBar(title: Text('MVVM Example')),
      body: Center(
        child: Text(
          'Counter: ${counterViewModel.counter}',
          style: TextStyle(fontSize: 24),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: counterViewModel.incrementCounter,
        child: Icon(Icons.add),
      ),
    );
  }
}
